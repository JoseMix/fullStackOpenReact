import React from "react";
const Filter = ({ nameSearchHandler, searchValue }) => {
  return (
    <>
      filter shown with{" "}
      <input onChange={nameSearchHandler} name="search" value={searchValue} />
    </>
  );
};
export default Filter;
