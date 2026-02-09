import React from "react";

function App() {
  /* Contants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_DONG_RATIO = 24560;

  let valueDollars = 15;

  // Convert  to euro
  function dollarToEuro(valueInDollars) {
    return valueInDollars * DOLLAR_TO_EURO_RATIO;
  }

  
  // Convert to dong
  function dollarToDong(valueInDollars) {
    return valueInDollars * DOLLAR_TO_DONG_RATIO;
  }

  return (
    <main>
      <h1>Device conversions</h1>

      <p>
        <label>Current value in dollars</label>
        <input disabled value={valueDollars} />

        <label>Value in Dong</label>
        <input disabled value={dollarToDong(valueDollars)} />

        <label>Value in Euro</label>
        <input disabled value={dollarToEuro(valueDollars)} />
      </p>
    </main>
  );
}

export default App;
