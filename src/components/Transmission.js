import React, { useState } from 'react';
import '../styles/Transmission.css'; // Import the CSS file

const Transmission = () => {
  const [processingOverheadSender, setProcessingOverheadSender] = useState('');
  const [wireDelay, setWireDelay] = useState('');
  const [flightTime, setFlightTime] = useState('');
  const [processingOverheadReceiver, setProcessingOverheadReceiver] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [bandwidth, setBandwidth] = useState('');
  const [useManualWireDelay, setUseManualWireDelay] = useState(true);
  const [transmissionTime, setTransmissionTime] = useState(null);
  const [throughput, setThroughput] = useState(null);

  const calculateWireDelay = () => {
    const size = parseFloat(fileSize) || 0; // File size in bits
    const bw = parseFloat(bandwidth) || 1; // Bandwidth in bits per second (avoid division by zero)
    return (size / bw) * 1000; // Time in seconds
  };

  const handleCalculateTransmissionTime = () => {
    const S = parseFloat(processingOverheadSender) || 0;
    const Tw = useManualWireDelay ? parseFloat(wireDelay) || 0 : calculateWireDelay();
    const Tf = parseFloat(flightTime) || 0;
    const R = parseFloat(processingOverheadReceiver) || 0;

    const totalTransmissionTime = S + Tw + Tf + R;
    setTransmissionTime(totalTransmissionTime);
  };

  const handleCalculateThroughput = () => {
    const size = parseFloat(fileSize) || 0; // File size in bits
    if (transmissionTime && transmissionTime > 0) {
      setThroughput((size / transmissionTime)*1000); // Throughput in bits per second
    } else {
      alert('Please calculate the Transmission Time first!');
    }
  };

  const handleClear = () => {
    setProcessingOverheadSender('');
    setWireDelay('');
    setFlightTime('');
    setProcessingOverheadReceiver('');
    setFileSize('');
    setBandwidth('');
    setUseManualWireDelay(true);
    setTransmissionTime(null);
    setThroughput(null);
  };

  return (
    <div className="calculator">
      <h2>Transmission Time Calculator</h2>
      <input
        type="number"
        placeholder="Processing Overhead at Sender (S)"
        value={processingOverheadSender}
        onChange={(e) => setProcessingOverheadSender(e.target.value)}
        className="input"
      />
      <div className="toggle-container">
        <label>
          <input
            type="radio"
            checked={useManualWireDelay}
            onChange={() => setUseManualWireDelay(true)}
          />
          Enter Wire Delay Manually
        </label>
        <label>
          <input
            type="radio"
            checked={!useManualWireDelay}
            onChange={() => setUseManualWireDelay(false)}
          />
          Calculate Wire Delay
        </label>
      </div>
      {useManualWireDelay ? (
        <input
          type="number"
          placeholder="Wire Delay (Tw)"
          value={wireDelay}
          onChange={(e) => setWireDelay(e.target.value)}
          className="input"
        />
      ) : (
        <>
          <input
            type="number"
            placeholder="File Size (bits)"
            value={fileSize}
            onChange={(e) => setFileSize(e.target.value)}
            className="input"
          />
          <input
            type="number"
            placeholder="Bandwidth (bits per second)"
            value={bandwidth}
            onChange={(e) => setBandwidth(e.target.value)}
            className="input"
          />
        </>
      )}
      <input
        type="number"
        placeholder="Flight Time / Queueing Delay (Tf)"
        value={flightTime}
        onChange={(e) => setFlightTime(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Processing Overhead at Receiver (R)"
        value={processingOverheadReceiver}
        onChange={(e) => setProcessingOverheadReceiver(e.target.value)}
        className="input"
      />
      <button onClick={handleCalculateTransmissionTime} className="button">
        Calculate Transmission Time
      </button>
      <button onClick={handleClear} className="button">
        Clear Inputs
      </button>
      {transmissionTime !== null && (
        <div className="result">
          Total Transmission Time: {transmissionTime.toFixed(13)} seconds
        </div>
      )}
      <h2>Throughput Calculator</h2>
      <input
        type="number"
        placeholder="File Size (bits)"
        value={fileSize}
        onChange={(e) => setFileSize(e.target.value)}
        className="input"
      />
      <button onClick={handleCalculateThroughput} className="button">
        Calculate Throughput
      </button>
      {throughput !== null && (
        <div className="result">
          Throughput: {throughput.toFixed(2)} bits/second
        </div>
      )}
    </div>
  );
};

export default Transmission;
