import React, { useState, useMemo } from "react";
import "./styles.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);

  const calculateBMI = useMemo(() => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  }, [weight, height]);

  return (
    <div className="bmi-container">
      <div className="input-container">
        <div className="label wh">Weight: {weight} kg</div>
        <div className="slider-container">
          <input
            type="range"
            min={40}
            max={220}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="label wh">Height: {height} cm</div>
        <div className="slider-container">
          <input
            type="range"
            min={140}
            max={220}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <div className="result-container">
        <div className="label">Your BMI is</div>
        <div className="bmi">{calculateBMI}</div>
      </div>
    </div>
  );
};

export default BMICalculator;
