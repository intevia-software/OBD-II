
import obd
connection = obd.OBD()


print("Connecté :", connection.is_connected())
print("Statut :", connection.status())

response = connection.query(obd.commands.GET_DTC)

print("Réponse brute :", response)
print("Valeur :", response.value)



response = connection.query(obd.commands.GET_DTC)

if response and response.value:
    print("Codes défaut détectés :")
    for code in response.value:
        print(code)
    # Retourne les codes pour un traitement éventuel
    print(response.value)