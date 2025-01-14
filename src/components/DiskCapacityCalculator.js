// DiskCapacityCalculator.js
import React, { useState } from 'react';
import '../styles/DiskCapacity.css'; // Ensure you create a corresponding CSS file

const DiskCapacityCalculator = () => {
  const [platters, setPlatters] = useState('');
  const [surfaces, setSurfaces] = useState('');
  const [tracks, setTracks] = useState('');
  const [sectors, setSectors] = useState('');
  const [bytesPerSector, setBytesPerSector] = useState('');
  const [capacity, setCapacity] = useState(null);

  const calculateCapacity = () => {
    const p = parseInt(platters) || 0;
    const n = parseInt(surfaces) || 0;
    const t = parseInt(tracks) || 0;
    const s = parseInt(sectors) || 0;
    const b = parseInt(bytesPerSector) || 0;

    const totalCapacity = p * n * t * s * b; // Capacity in bytes
    setCapacity(totalCapacity);
  };

  const clearInputs = () => {
    setPlatters('');
    setSurfaces('');
    setTracks('');
    setSectors('');
    setBytesPerSector('');
    setCapacity(null);
  };

  return (
    <div className="calculator">
      <h2>Disk Capacity Calculator</h2>
      <input
        type="number"
        placeholder="Number of Platters (p)"
        value={platters}
        onChange={(e) => setPlatters(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Number of Surfaces per Platter (n)"
        value={surfaces}
        onChange={(e) => setSurfaces(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Number of Tracks per Surface (t)"
        value={tracks}
        onChange={(e) => setTracks(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Number of Sectors per Track (s)"
        value={sectors}
        onChange={(e) => setSectors(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Number of Bytes per Sector (b)"
        value={bytesPerSector}
        onChange={(e) => setBytesPerSector(e.target.value)}
        className="input"
      />
      <button onClick={calculateCapacity} className="button">
        Calculate Capacity
      </button>
      <button onClick={clearInputs} className="button">
        Clear Inputs
      </button>
      {capacity !== null && (
        <div className="result">
          Total Capacity: {capacity.toLocaleString()} bytes
        </div>
      )}
    </div>
  );
};

export default DiskCapacityCalculator;
