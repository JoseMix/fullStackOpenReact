import React from "react";

const DeleteButton = ({ deleteHandler }) => {
  return <button onClick={() => deleteHandler()}>Delete</button>;
};
export default DeleteButton;
