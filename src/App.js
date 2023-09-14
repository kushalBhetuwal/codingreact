import { useState } from "react";
import "./App.css";
// import Calculate from "./calculate";
const App = () => {
  const [billvalue, setBillValue] = useState("");
  const [tipvalue, setTipValue] = useState("");
  const [numberofpeople, setPeople] = useState("");
  const billchange = (e) => {
    setBillValue(e.target.value);
  };
  const tipchange = (e) => {
    setTipValue(e.target.value);
  };
  const totalpeople = (e) => {
    setPeople(e.target.value);
  };

  let totaltip = (billvalue * (tipvalue / 100)).toFixed(2);
  let tipPerPerson = (totaltip / numberofpeople).toFixed(2);

  const conditionalreturn = () => {
    if (billvalue === "" || tipvalue === "") {
      return (
        <div>
          <p>Total Tip: -</p>
          <p>Tip Per Person: -</p>
        </div>
      );
    } else if (numberofpeople === "" || numberofpeople < 1) {
      return (
        <div>
          <p>Total Tip: ${totaltip}</p>
          <p>Tip Per Person: -</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Total Tip: ${totaltip}</p>
          <p>Tip Per Person: ${tipPerPerson}</p>
        </div>
      );
    }
  };
  return (
    <div>
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        id="number1"
        value={billvalue}
        min="0"
        onChange={billchange}
      />
      <label htmlFor="tippercent">Tip Percentage</label>
      <input
        type="number"
        id="number2"
        value={tipvalue}
        min="0"
        onChange={tipchange}
      />
      <label htmlFor="Numberofpeople">Number of People</label>
      <input
        type="number"
        id="number3"
        value={numberofpeople}
        onChange={totalpeople}
      />
      {conditionalreturn()}
    </div>
  );
};

export default App;
