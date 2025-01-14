import React from "react";
import '../styles/BioinformaticsPredictor.css'; 
import FileUpload from "../components/FileUpload";



const BioinformaticsPredictor = () => {
    
  return (
    <div className="App">
            <h1>ML Model File Prediction</h1>
            <FileUpload />
    </div>
  );
};

export default BioinformaticsPredictor;
