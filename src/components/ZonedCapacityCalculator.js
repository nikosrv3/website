import React, { useState } from "react";
import "../styles/ZonedCapacityCalculator.css";

const ZonedCapacityCalculator = () => {
  const [platters, setPlatters] = useState(0);
  const [surfaces, setSurfaces] = useState(0);
  const [zones, setZones] = useState(1);
  const [zoneDetails, setZoneDetails] = useState([]);
  const [bytesPerSector, setBytesPerSector] = useState(0);
  const [capacity, setCapacity] = useState(null);

  const handleZoneInputChange = (index, field, value) => {
    const updatedZones = [...zoneDetails];
    updatedZones[index] = { ...updatedZones[index], [field]: Number(value) || 0 };
    setZoneDetails(updatedZones);
  };

  const handleCalculate = () => {
    if (platters <= 0 || surfaces <= 0 || bytesPerSector <= 0 || zoneDetails.length === 0) {
      alert("Please fill in all fields correctly.");
      return;
    }

    // Calculate capacity with the given formula
    const zoneSum = zoneDetails.reduce((sum, zone) => {
      const tracks = zone?.tracks || 0;
      const sectors = zone?.sectors || 0;
      return sum + tracks * sectors;
    }, 0);

    const totalCapacity = platters * surfaces * zoneSum * bytesPerSector;
    setCapacity(totalCapacity);
  };

  const renderZoneInputs = () => {
    return Array.from({ length: zones }).map((_, index) => (
      <div key={index} className="zone-input">
        <h4>Zone {index + 1}</h4>
        <label htmlFor={`tracks-${index}`}>Tracks at Zone {index + 1}:</label>
        <input
          type="number"
          id={`tracks-${index}`}
          className="input"
          placeholder="Enter tracks"
          onChange={(e) => handleZoneInputChange(index, "tracks", e.target.value)}
        />

        <label htmlFor={`sectors-${index}`}>Sectors per Track at Zone {index + 1}:</label>
        <input
          type="number"
          id={`sectors-${index}`}
          className="input"
          placeholder="Enter sectors per track"
          onChange={(e) => handleZoneInputChange(index, "sectors", e.target.value)}
        />
      </div>
    ));
  };

  return (
    <div className="calculator">
      <h2>Zoned Disk Capacity Calculator</h2>

      <label htmlFor="platters">Number of Platters (p):</label>
      <input
        type="number"
        id="platters"
        className="input"
        placeholder="Enter number of platters"
        value={platters}
        onChange={(e) => setPlatters(Number(e.target.value))}
      />

      <label htmlFor="surfaces">Number of Surfaces per Platter (n):</label>
      <input
        type="number"
        id="surfaces"
        className="input"
        placeholder="Enter number of surfaces"
        value={surfaces}
        onChange={(e) => setSurfaces(Number(e.target.value))}
      />

      <label htmlFor="zones">Number of Zones (z):</label>
      <input
        type="number"
        id="zones"
        className="input"
        placeholder="Enter number of zones"
        value={zones}
        onChange={(e) => setZones(Number(e.target.value))}
      />

      <label htmlFor="bytes">Bytes per Sector (b):</label>
      <input
        type="number"
        id="bytes"
        className="input"
        placeholder="Enter bytes per sector"
        value={bytesPerSector}
        onChange={(e) => setBytesPerSector(Number(e.target.value))}
      />

      {renderZoneInputs()}

      <button className="button" onClick={handleCalculate}>
        Calculate Capacity
      </button>

      {capacity !== null && (
        <div className="result">
          <h3>Total Capacity:</h3>
          <p>{capacity.toLocaleString()} bytes</p>
        </div>
      )}
    </div>
  );
};

export default ZonedCapacityCalculator;
