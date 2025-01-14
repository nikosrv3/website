import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [predictions, setPredictions] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setPredictions(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Upload File for Prediction</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Submit</button>
            </form>
            {predictions && (
                <div>
                    <h3>Predictions:</h3>
                    <pre>{JSON.stringify(predictions, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default FileUpload;
