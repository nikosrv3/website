import React, { useState } from 'react';
import '../styles/MeanCalculator.css'; // Import the CSS file

const MeanCalculator = () => {
  const [values, setValues] = useState('');
  const [weights, setWeights] = useState('');
  const [results, setResults] = useState({
    arithmeticMean: null,
    weightedMean: null,
    geometricMean: null,
    harmonicMean: null,
  });

  const handleInputChange = (e) => {
    setValues(e.target.value);
  };

  const handleWeightsChange = (e) => {
    setWeights(e.target.value);
  };

  const calculateMeans = () => {
    const numbers = values.split(',').map(Number); // Split by commas and convert to numbers
    const weightsArr = weights ? weights.split(',').map(Number) : [];

    // Arithmetic Mean
    const arithmeticMean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

    // Weighted Arithmetic Mean
    let weightedMean = null;
    if (weightsArr.length === numbers.length) {
      const sumWeighted = numbers.reduce((acc, val, i) => acc + val * weightsArr[i], 0);
      const sumWeights = weightsArr.reduce((acc, val) => acc + val, 0);
      weightedMean = sumWeighted / sumWeights;
    }

    // Geometric Mean
    const product = numbers.reduce((acc, val) => acc * val, 1);
    const geometricMean = Math.pow(product, 1 / numbers.length);

    // Harmonic Mean
    const harmonicMean = numbers.length / numbers.reduce((acc, val) => acc + (1 / val), 0);

    setResults({
      arithmeticMean,
      weightedMean,
      geometricMean,
      harmonicMean,
    });
  };

  const handleClear = () => {
    setValues('');
    setWeights('');
    setResults({
        arithmeticMean: null,
        weightedMean: null,
        geometricMean: null,
        harmonicMean: null,
      });  };

  return (
    <div className="calculator">
      <h2>Mean Calculator</h2>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        value={values}
        onChange={handleInputChange}
        className="input"
      />
      <input
        type="text"
        placeholder="Enter weights separated by commas (optional)"
        value={weights}
        onChange={handleWeightsChange}
        className="input"
      />
      <button onClick={calculateMeans} className="button">Calculate Means</button>
      <button onClick={handleClear} className="button"> {/* Use class name from CSS */}
        Clear Inputs
      </button>
      {results.arithmeticMean !== null && (
        <div className="result">
          <p>Arithmetic Mean: {results.arithmeticMean}</p>
          <p>Weighted Arithmetic Mean: {results.weightedMean !== null ? results.weightedMean : "N/A"}</p>
          <p>Geometric Mean: {results.geometricMean}</p>
          <p>Harmonic Mean: {results.harmonicMean}</p>
        </div>
      )}
    </div>
  );
};

export default MeanCalculator;
