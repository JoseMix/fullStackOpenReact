import React from "react";

const Form = ({
  submitHandler,
  nameHandler,
  numHandler,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        name: <input onChange={nameHandler} name="name" value={newName} />
        <p></p>
        number:
        <input onChange={numHandler} name="number" value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default Form;
