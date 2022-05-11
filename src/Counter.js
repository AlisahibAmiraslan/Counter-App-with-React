import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <React.Fragment>
      <section>
        <h1>Counter</h1>
        <h2>{value}</h2>
        <button className="btn decrease" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn increase" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
    </React.Fragment>
  );
};

export default Counter;
