# Exemple de classe pour lire les codes défauts OBD-II

class OBDDefaultReader:
    def __init__(self, connection):
       
        self.connection = connection

    def read(self):
       
        response = self.connection.query(obd.commands.GET_DTC)

        if response and response.value:
            print("Codes défaut détectés :")
            for code in response.value:
                return code
            # Retourne les codes pour un traitement éventuel
            return response.value
        else:
            print("Aucun défaut détecté")
            return []
        
    def delete(self):

        self.connection.query(obd.commands.CLEAR_DTC)
        return ("Codes défaut effacés")
