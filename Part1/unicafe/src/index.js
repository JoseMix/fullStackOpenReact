import React, { useState } from "react";
import ReactDOM from "react-dom";
// const Statistics = (props) => {
//   return (
//     <>
//       <p>good {props.good}</p>
//       <p>neutral {props.neutral}</p>
//       <p>bad {props.bad}</p>
//       <p>all {props.total}</p>
//       {props.total > 0 && <p>average {props.average / props.total}</p>}
//       {props.total > 0 && <p>positive {(props.good / props.total) * 100}%</p>}
//     </>
//   );
// };
const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text} </td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text} </button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage(average + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(average - 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <h1>Statatistics</h1>
      <div>
        {total > 0 ? (
          <div>
            <Statistics text="good" value={good} />
            <Statistics text="bad" value={bad} />
            <Statistics text="neutral" value={neutral} />
            <Statistics text="total" value={total} />
            <Statistics text="average" value={average / total} />
            <Statistics text="positive" value={(good / total) * 100} />
          </div>
        ) : (
          <h1>No feedback given</h1>
        )}
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
