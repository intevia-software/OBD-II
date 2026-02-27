import obd

class OBDCompteurReader:

    def __init__(self, connection):
        self.connection = connection

    def rpm(self):
        cmd = obd.commands.RPM
        response = self.connection.query(cmd)

        if not response.is_null():
            rpm = response.value.magnitude  # valeur numérique
            print(f"RPM: {rpm}")
            return rpm
        else:
            print("Aucune donnée")
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