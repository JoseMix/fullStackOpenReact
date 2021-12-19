import React from "react";

const Total = (props) => {
  const total = props.courses.reduce((sum, course) => {
    return sum + course.exercises;
  }, 0);
  return <p>Number of exercises {total}</p>;
};

export default Total;
