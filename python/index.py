# server.py

import obd
from flask import Flask, jsonify
from flask_cors import CORS
from default import OBDDefaultReader
from compteur import OBDCompteurReader


connection = obd.OBD()

default = OBDDefaultReader(connection)
compteur = OBDCompteurReader(connection)

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

# @app.route('/api/get/rpm')
# def read_rpm():
#     code = compteur.rpm()
#     return jsonify({"rpm": code})

# @app.route('/api/get/speed')
# def read_speed():
#     code = compteur.speed()
#     return jsonify({"speed": code})








if __name__ == '__main__':
    app.run(port=5000)