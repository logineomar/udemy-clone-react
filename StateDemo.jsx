import { useState } from "react";

export default function StateDemo() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    // This will only increment once (demonstrates state snapshot)
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  };

  const handleCorrectIncrement = () => {
    // This will increment 3 times (using functional updates)
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
  };

  return (
    <div className="state-demo">
      <h3>State Demo: {number}</h3>
      <button onClick={handleIncrement}>Increment (Broken): +3?</button>
      <button onClick={handleCorrectIncrement}>Increment (Correct): +3</button>
    </div>
  );
}
