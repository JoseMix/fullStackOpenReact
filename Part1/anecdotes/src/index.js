import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));
  const [max, setMax] = useState(0);
  const clickHandler = () => {
    setSelected(Math.floor(Math.random() * 6));
  };

  const voteHandler = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    //setMax(copy.indexOf(Math.max(...copy)));Setea max index
    setMax(Math.max(...copy));
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>Votes: {votes[selected]}</div>
      <button onClick={clickHandler}>Next</button>
      <button onClick={voteHandler}>Vote</button>
      <div>Anecdote with most votes</div>
      {max > 0 && <div>{anecdotes[votes.indexOf(max)]}</div>}
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
