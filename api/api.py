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

def get_404(e):
    return '404, I got nothing.'

def get_500(e):
    return '500, internal server error. Sorry.'

app.register_error_handler(404, get_404)

app.register_error_handler(500, get_500)