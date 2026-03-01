import obd


# ==========================
# CONFIG CARBURANT
# ==========================
FUEL_TYPE = "gasoline"  # ou "diesel"

if FUEL_TYPE == "gasoline":
    AFR = 14.7
    FUEL_DENSITY = 745
else:
    AFR = 14.5
    FUEL_DENSITY = 835


# ==========================
# CLASSE OBD
# ==========================

class OBDCapteurReader:

    def __init__(self, connection):
        self.connection = connection

        # Commandes OBD

        self.cmd_rpm = obd.commands.RPM
        self.cmd_temp = obd.commands.COOLANT_TEMP
        self.cmd_maf = obd.commands.MAF
        self.cmd_speed = obd.commands.SPEED
        self.cmd_voltage = obd.commands.ELM_VOLTAGE
        self.cmd_throttle = obd.commands.THROTTLE_POS
        self.cmd_fuel_pressure = obd.commands.FUEL_PRESSURE
        self.cmd_intake_temp = obd.commands.INTAKE_TEMP
        self.cmd_engine_load = obd.commands.ENGINE_LOAD

    # --------------------------
    # Fonctions capteurs
    # --------------------------

    def get_value(self, cmd, unit=None):
        response = self.connection.query(cmd)
        if not response.is_null():
            if unit:
                return response.value.to(unit).magnitude
            return response.value.magnitude
        return None

    def rpm(self):
        return self.get_value(self.cmd_rpm)
    
    def temp(self):
        return self.get_value(self.cmd_temp, "degC")
    
    def maf(self):
        return self.get_value(self.cmd_maf, "g/s")

    def speed(self):
        return self.get_value(self.cmd_speed, "km/h")

    def battery_voltage(self):
        return self.get_value(self.cmd_voltage, "volt")

    def throttle_position(self):
        return self.get_value(self.cmd_throttle, "percent")

    def fuel_pressure(self):
        return self.get_value(self.cmd_fuel_pressure, "kPa")

    def intake_temp(self):
        return self.get_value(self.cmd_intake_temp, "degC")

    def engine_load(self):
        return self.get_value(self.cmd_engine_load, "percent")

    # --------------------------
    # Consommation estimée
    # --------------------------

    def fuel_consumption(self):

        rpm = self.rpm()
        temp = self.temp()
        maf = self.maf()
        speed = self.speed()

        if maf is None:
            return None

        fuel_gps = maf / AFR
        fuel_lph = (fuel_gps * 3600) / FUEL_DENSITY

        data = {
            "rpm": round(rpm, 2) if rpm else 0,
            "temp": round(temp, 1) if temp else None,
            "maf_gps": round(maf, 2) if maf else None,
            "speed_kmh": round(speed, 1) if speed else 0,
            "battery_voltage": round(self.battery_voltage(), 2) if self.battery_voltage() else None,
            "throttle_position_percent": round(self.throttle_position(), 1) if self.throttle_position() else None,
            "fuel_pressure_kpa": round(self.fuel_pressure(), 1) if self.fuel_pressure() else None,
            "intake_temp_c": round(self.intake_temp(), 1) if self.intake_temp() else None,
            "engine_load_percent": round(self.engine_load(), 1) if self.engine_load() else None,
        }

        if speed and speed > 0:
            consumption = (fuel_lph / speed) * 100
            data["consumption_l_100km"] = round(consumption, 2)
        else:
            data["consumption_lph"] = round(fuel_lph, 2)

        return data

