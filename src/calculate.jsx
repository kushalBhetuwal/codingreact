const Calculate = ({
  totaltip,
  tipPerPerson,
  billvalue,
  tipvalue,
  numberofpeople,
}) => {
  if (billvalue === "" || tipvalue === "") {
    return (
      <div>
        <p>Total Tip: -</p>
        <p>Tip Per Person: -</p>
      </div>
    );
  } else if (numberofpeople === "" || numberofpeople<1) {
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
export default Calculate;
