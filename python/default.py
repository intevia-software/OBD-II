# Exemple de classe pour lire les codes défauts OBD-II

import obd

class OBDDefaultReader:
    def __init__(self, connection):
        self.connection = connection

    def read(self):
        response = self.connection.query(obd.commands.GET_DTC)

        if response and response.value:
            print("Codes défaut détectés :")
            
            codes = []
            for code in response.value:
                print(code)
                codes.append(str(code))  # Converti en string pour JSON
            
            return codes  # Retourne toute la liste
        else:
            print("Aucun défaut détecté")
            return []

    def delete(self):
        self.connection.query(obd.commands.CLEAR_DTC)
        return "Codes défaut effacés"