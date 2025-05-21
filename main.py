from flask import Flask, render_template, send_from_directory, redirect, url_for
import os

app = Flask(__name__, static_url_path='')

# Routes pour toutes nos pages HTML
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/login.html')
def login():
    return send_from_directory('.', 'login.html')

@app.route('/register.html')
def register():
    return send_from_directory('.', 'register.html')

@app.route('/dashboard.html')
def dashboard():
    return send_from_directory('.', 'dashboard.html')

@app.route('/profile.html')
def profile():
    return send_from_directory('.', 'profile.html')

@app.route('/messaging.html')
def messaging():
    return send_from_directory('.', 'messaging.html')

@app.route('/schedule.html')
def schedule():
    return send_from_directory('.', 'schedule.html')

@app.route('/subscription.html')
def subscription():
    return send_from_directory('.', 'subscription.html')

# Route pour servir les fichiers CSS et JavaScript
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)