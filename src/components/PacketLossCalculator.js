import React, { useState } from "react";
import "../styles/packetLossCalculator.css";

const PacketLossCalculator = () => {
  const [initialPackets, setInitialPackets] = useState(0);
  const [lossPercent, setLossPercent] = useState(0);
  const [totalPackets, setTotalPackets] = useState(null);

  const calculateTotalPackets = (packets, lossPercent) => {
    const loss = Math.floor(packets * lossPercent / 100);
    if (loss === 0) {
      return 0;
    }
    return loss + calculateTotalPackets(loss, lossPercent);
  };

  const handleCalculate = () => {
    const packets = parseInt(initialPackets, 10);
    const loss = parseFloat(lossPercent);

    if (isNaN(packets) || isNaN(loss) || packets <= 0 || loss <= 0 || loss >= 100) {
      alert("Please provide valid inputs: # of packets > 0 and loss % (0 < % < 100)");
      return;
    }

    const totalLoss = calculateTotalPackets(packets, loss);
    setTotalPackets(packets + totalLoss);
  };

  return (
    <div className="packet-loss-calculator">
      <h2>Packet Loss Calculator</h2>
      <label>Initial Number of Packets:</label>
      <input
        type="number"
        value={initialPackets}
        onChange={(e) => setInitialPackets(e.target.value)}
        className="input"
        placeholder="Enter initial number of packets"
      />

      <label>Packet Loss Percentage (%):</label>
      <input
        type="number"
        value={lossPercent}
        onChange={(e) => setLossPercent(e.target.value)}
        className="input"
        placeholder="Enter loss percentage"
      />

      <button onClick={handleCalculate} className="button">
        Calculate Total Packets
      </button>

      {totalPackets !== null && (
        <div className="result">
          <p>Total Packets Needed: <strong>{totalPackets.toLocaleString()}</strong></p>
        </div>
      )}
    </div>
  );
};

export default PacketLossCalculator;
