import React, { useState } from "react";
import "../styles/RandomSector.css";

const RandomSectorCalculator = () => {
  const [sectorsPerTrack, setSectorsPerTrack] = useState(0); // s
  const [seekTime, setSeekTime] = useState(0); // b
  const [rotationalSpeed, setRotationalSpeed] = useState(0); // r
  const [randomTime, setRandomTime] = useState(null); // Result

  const calculateReadTime = () => {
    const s = parseFloat(sectorsPerTrack);
    const a = parseFloat(seekTime);
    const r = parseFloat(rotationalSpeed);

    if (s > 0 && a > 0 && r > 0) {
      const time = a + (60/(r*2))*1000 + (60/(r * s));
      setRandomTime(time);
    } else {
        setRandomTime(null);
      alert("Please provide valid inputs for all fields.");
    }
  };

  return (
    <div className="sector-read-calculator">
      <h2>Random Sector Read Time Calculator</h2>
      <label>Number of Sectors per Track (s):</label>
      <input
        type="number"
        value={sectorsPerTrack}
        onChange={(e) => setSectorsPerTrack(e.target.value)}
        className="input"
        placeholder="Enter number of sectors per track"
      />

      <label>Average Seek Time (a):</label>
      <input
        type="number"
        value={seekTime}
        onChange={(e) => setSeekTime(e.target.value)}
        className="input"
        placeholder="Enter Average Seek Time"
      />

      <label>Rotational Speed (r) in RPM:</label>
      <input
        type="number"
        value={rotationalSpeed}
        onChange={(e) => setRotationalSpeed(e.target.value)}
        className="input"
        placeholder="Enter rotational speed in RPM"
      />

      <button onClick={calculateReadTime} className="button">
        Calculate Random Sector Read Time
      </button>

      {randomTime !== null && (
        <div className="result">
          <p>
            Random Sector Read Time: <strong>{randomTime.toLocaleString()}</strong>{" "}
            seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default RandomSectorCalculator;
