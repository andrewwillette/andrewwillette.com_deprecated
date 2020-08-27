import time
from flask import Flask, jsonify

app = Flask(__name__, static_url_path='', static_folder='../dist')

@app.route('/')
def get_root():
    return app.send_static_file('index.html')

@app.route('/music')
def get_music():
    return app.send_static_file('index.html')

@app.route('/resume')
def get_cv():
    return app.send_static_file('index.html')

@app.route('/*')
def get_404():
    return app.send_static_file('index.html')