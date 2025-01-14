import React, { useState } from "react";
import "../styles/TransferRateCalculator.css";

const TransferRateCalculator = () => {
  const [sectorsPerTrack, setSectorsPerTrack] = useState(0); // s
  const [bytesPerSector, setBytesPerSector] = useState(0); // b
  const [rotationalSpeed, setRotationalSpeed] = useState(0); // r
  const [transferRate, setTransferRate] = useState(null); // Result

  const calculateTransferRate = () => {
    const s = parseFloat(sectorsPerTrack);
    const b = parseFloat(bytesPerSector);
    const r = parseFloat(rotationalSpeed);

    if (s > 0 && b > 0 && r > 0) {
      const rate = (s * b * r) / 60; // Formula: (s * b * r) / 60
      setTransferRate(rate);
    } else {
      setTransferRate(null);
      alert("Please provide valid inputs for all fields.");
    }
  };

  return (
    <div className="transfer-rate-calculator">
      <h2>Data Transfer Rate Calculator</h2>
      <label>Number of Sectors per Track (s):</label>
      <input
        type="number"
        value={sectorsPerTrack}
        onChange={(e) => setSectorsPerTrack(e.target.value)}
        className="input"
        placeholder="Enter number of sectors per track"
      />

      <label>Number of Bytes per Sector (b):</label>
      <input
        type="number"
        value={bytesPerSector}
        onChange={(e) => setBytesPerSector(e.target.value)}
        className="input"
        placeholder="Enter number of bytes per sector"
      />

      <label>Rotational Speed (r) in RPM:</label>
      <input
        type="number"
        value={rotationalSpeed}
        onChange={(e) => setRotationalSpeed(e.target.value)}
        className="input"
        placeholder="Enter rotational speed in RPM"
      />

      <button onClick={calculateTransferRate} className="button">
        Calculate Transfer Rate
      </button>

      {transferRate !== null && (
        <div className="result">
          <p>
            Data Transfer Rate: <strong>{transferRate.toLocaleString()}</strong>{" "}
            bytes/second
          </p>
        </div>
      )}
    </div>
  );
};

export default TransferRateCalculator;
