import React, { useState } from 'react';
import '../styles/ExecutionTimeCalculator.css'; // Import the CSS file

const ExecutionTimeCalculator = () => {
  const [clockCycleTime, setClockCycleTime] = useState('');
  const [numInstructions, setNumInstructions] = useState('');
  const [cpiInputs, setCpiInputs] = useState({
    A: '',
    B: '',
    C: '',
    D: '',
    E: '',
    F: '',
    G: ''
  });
  const [frequencyInputs, setFrequencyInputs] = useState({
    A: '',
    B: '',
    C: '',
    D: '',
    E: '',
    F: '',
    G: ''
  });
  const [executionTime, setExecutionTime] = useState(null);

  const handleCpiChange = (instruction, value) => {
    setCpiInputs((prev) => ({ ...prev, [instruction]: value }));
  };

  const handleFrequencyChange = (instruction, value) => {
    setFrequencyInputs((prev) => ({ ...prev, [instruction]: value }));
  };

  const handleCalculate = () => {
    let totalExecutionTime = 0;

    for (const instruction in cpiInputs) {
      const cpi = parseFloat(cpiInputs[instruction]);
      const frequency = parseFloat(frequencyInputs[instruction]) || 0;

      if (!isNaN(cpi) && cpi !== '' && frequency > 0) {
        totalExecutionTime += frequency * cpi;
      }
    }

    // Default clockCycleTime to 1 if it is blank
    const effectiveClockCycleTime = clockCycleTime === '' ? 1 : parseFloat(clockCycleTime);
    const effectiveNumInstructions = numInstructions === '' ? 1 : parseFloat(numInstructions);

    totalExecutionTime *= effectiveClockCycleTime * effectiveNumInstructions; // Calculate total execution time
    setExecutionTime(totalExecutionTime);
  };
  const handleClear = () => {
    setClockCycleTime('');
    setNumInstructions('');
    setCpiInputs({
      A: '',
      B: '',
      C: '',
      D: '',
      E: '',
      F: '',
      G: ''
    });
    setFrequencyInputs({
      A: '',
      B: '',
      C: '',
      D: '',
      E: '',
      F: '',
      G: ''
    });
    setExecutionTime(null); // Reset execution time
  };

  return (
    <div className="calculator">
      <h2>Execution Time Calculator</h2>
      <input
        type="number"
        placeholder="Enter Current Clock Cycle Time"
        value={clockCycleTime}
        onChange={(e) => setClockCycleTime(e.target.value)}
        className="input" // Use class name from CSS
      />
      <input
        type="number"
        placeholder="Enter # of total instructions"
        value={numInstructions}
        onChange={(e) => setNumInstructions(e.target.value)}
        className="input" // Use class name from CSS
      />
      {Object.keys(cpiInputs).map((instruction) => (
        <div key={instruction} className="instruction-container">
          <input
            type="number"
            placeholder={`CPI for Instruction ${instruction}`}
            value={cpiInputs[instruction]}
            onChange={(e) => handleCpiChange(instruction, e.target.value)}
            className="input" // Use class name from CSS
          />
          <input
            type="number"
            placeholder={`Frequency for Instruction ${instruction}`}
            value={frequencyInputs[instruction]}
            onChange={(e) => handleFrequencyChange(instruction, e.target.value)}
            className="input" // Use class name from CSS
          />
        </div>
      ))}
      <button onClick={handleCalculate} className="button"> {/* Use class name from CSS */}
        Calculate Execution Time
      </button>
      <button onClick={handleClear} className="button"> {/* Use class name from CSS */}
        Clear Inputs
      </button>
      {executionTime !== null && (
        <div className="result"> {/* Use class name from CSS */}
          Total Execution Time: {executionTime.toFixed(13)} seconds
        </div>
      )}
    </div>
  );
};

export default ExecutionTimeCalculator;
