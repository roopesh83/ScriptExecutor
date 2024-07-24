from flask import Flask, jsonify, request
import json
from flask_cors import CORS
# Create a Flask application
app = Flask(__name__)
CORS(app)

# Define a route for the root URL '/'
@app.route('/Script', methods=['GET'])
def get_scripts():
    with open('./script_store.json', 'r') as fh:
        data = json.loads(fh.read())
    return data, 200

@app.route('/Script1', methods=['POST'])
def add_script():
    # Get the JSON data from the request body
    data = request.get_json()

    # Extract name and value from JSON data
    script_name = data['script_name']
    content = data['content']
    created_datetime = data['created_datetime']

    with open('./script_store.json', 'r+') as fh:
        file_contents = fh.read()
        script_store = json.loads("{}" if not file_contents else file_contents)
        if script_name in script_store:
            return {'message': 'script exists'}, 400

        script_store[script_name] = {
            "content": content,
            "created_datetime": created_datetime 
        }

    with open('./script_store.json', 'r+') as fh:
        fh.write(json.dumps(script_store, indent=1))

    return {'message': 'Data added successfully'}, 201


# Run the application
if __name__ == '__main__':
    app.run(debug=True)
