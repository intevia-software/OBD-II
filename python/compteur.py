import obd

class OBDCompteurReader:

    def __init__(self, connection):
        self.connection = connection
        self.cmd_rpm = obd.commands.RPM
        self.cmd_speed = obd.commands.SPEED
        self.cmd_temp = obd.commands.COOLANT_TEMP

    def rpm(self):
        response = self.connection.query(self.cmd_rpm)

        if not response.is_null():
            rpm = response.value.magnitude
            print(f"RPM: {rpm}")
            return rpm
        else:
            print("Aucune donnée RPM")
            return None

    def speed(self):
        response = self.connection.query(self.cmd_speed)

        if not response.is_null():
            speed = response.value.to("km/h").magnitude
            print(f"Vitesse: {speed} km/h")
            return speed
        else:
            print("Aucune donnée vitesse")
            return None

    def temperature(self):
        response = self.connection.query(self.cmd_temp)

        if not response.is_null():
            temp = response.value.to("degC").magnitude
            print(f"Température moteur: {temp} °C")
            return temp
        else:
            print("Aucune donnée température")
            return None