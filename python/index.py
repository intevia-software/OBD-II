# server.py

import obd
from flask import Flask, jsonify
from default import OBDDefaultReader
connection = obd.OBD()
default = OBDDefaultReader(connection)

app = Flask(__name__)

@app.route('/api/get/default')
def read_default():
    code = default.read()
    return jsonify({"message": code})


@app.route('/api/delete/default')
def read_default():
    code = default.delete()
    return jsonify({"message": code})








if __name__ == '__main__':
    app.run(port=5000)