from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

# Load the model
with open('PTPN1_IC50_predictor.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

app = Flask(__name__)
CORS(app)  

@app.route('/predict', methods=['POST'])
def predict():
    # Get the file from the request
    file = request.files['file']
    
    # Load the file into a DataFrame or however your model expects it
    data = pd.read_csv(file)  # Adjust to your file's format

    # Check if data format is correct
    # Add any required validation steps here

    # Make prediction
    predictions = model.predict(data)

    # Return the result as JSON
    return jsonify(predictions.tolist())

if __name__ == '__main__':
    app.run(debug=True)
