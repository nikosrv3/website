import React from "react";
import '../styles/Calculator.css'; 
import MeanCalculator from '../components/MeanCalculator';
import ExecutionTimeCalculator from '../components/ExecutionTimeCalculator';
import SpeedupCalculator from "../components/Speedup";
import Transmission from "../components/Transmission";
import DiskCapacityCalculator from "../components/DiskCapacityCalculator";
import ZonedCapacityCalculator from "../components/ZonedCapacityCalculator";
import TransferRateCalculator from "../components/TransferRateCalculator";
import RandomSectorCalculator from "../components/RandomSectorCalculator";
import PacketLossCalculator from "../components/PacketLossCalculator";

const Calculator = () => {
  return (
    <div>
      <section id="calculators" className="calculator-section">
        <h2>Formula Calculators</h2>
        <div className="calculator-container">
          <Transmission /> 
          <DiskCapacityCalculator />
          <ZonedCapacityCalculator />
          <TransferRateCalculator />
          <RandomSectorCalculator />
          <PacketLossCalculator />
        </div>
      </section>

    </div>
  );
};

export default Calculator;
