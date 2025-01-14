import React, { useState } from 'react';
import '../styles/Speedup.css';

const SpeedupCalculator = () => {
  const [originalTime, setOriginalTime] = useState('');
  const [improvedTime, setImprovedTime] = useState('');
  const [results, setResults] = useState({
    speedup: null,
    improvement: null,
    speeduppercentage: null,
  });

  const handleCalculate = () => {
    const origTime = parseFloat(originalTime);
    const impTime = parseFloat(improvedTime);

    // Calculate Speedup
    const speedup = origTime / impTime;
    const speeduppercentage = (speedup - 1) * 100;
    // Calculate Improvement
    const improvement = ((origTime - impTime) / origTime) * 100;


    setResults({
      speedup,
      improvement,
      speeduppercentage,
    });
  };

  const handleClear = () => {
    setOriginalTime('');
    setImprovedTime('');
    setResults({
        speedup: null,
        improvement: null,
        speeduppercentage: null,
      });  };

  return (
    <div className="calculator">
      <h2>Speedup and Time Improved Calculator</h2>
      <input
        type="number"
        placeholder="Original Execution Time"
        value={originalTime}
        onChange={(e) => setOriginalTime(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Improved Execution Time"
        value={improvedTime}
        onChange={(e) => setImprovedTime(e.target.value)}
        className="input"
      />
      <button onClick={handleCalculate} className="button">
        Calculate
      </button>
      <button onClick={handleClear} className="button">
        Clear
      </button>
      {results.speedup !== null && (
        <div className="result">
          <p>Speedup: {results.speedup.toFixed(5)}</p>
          <p>Speedup %: {results.speeduppercentage.toFixed(5)}</p>
          <p>Improvement in Execution Time: {results.improvement.toFixed(5)}%</p>
        </div>
      )}
    </div>
  );
};

export default SpeedupCalculator;
