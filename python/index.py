# server.py

import obd
from flask import Flask, jsonify
from flask_cors import CORS
from default import OBDDefaultReader
from compteur import OBDCompteurReader
from capteur import OBDCapteurReader


connection = obd.OBD()

default = OBDDefaultReader(connection)
compteur = OBDCompteurReader(connection)
capteur = OBDCapteurReader(connection)

app = Flask(__name__)
CORS(app)


@app.route('/api/get/connexion')
def read_connexion():
    code = connection.is_connected()
    return jsonify({"connexion": code})

# @app.route('/api/get/default')
# def read_default():
#     code = default.read()
#     return jsonify({"message": code})


# @app.route('/api/delete/default')
# def delete_default():
#     code = default.delete()
#     return jsonify({"message": code})

# @app.route('/api/get/temp')
# def read_temp():
#     code = compteur.temperature()
#     return jsonify({"temp": code})

# @app.route('/api/get/rpm')
# def read_rpm():
#     code = compteur.rpm()
#     return jsonify({"rpm": code})

# @app.route('/api/get/speed')
# def read_speed():
#     code = compteur.speed()
#     return jsonify({"speed": code})

@app.route("/api/consumption")
def get_consumption():
    data = capteur.fuel_consumption()

    if data is None:
        return jsonify({"error": "Données indisponibles"}), 500

    return jsonify(data)









if __name__ == '__main__':
    app.run(port=5000)