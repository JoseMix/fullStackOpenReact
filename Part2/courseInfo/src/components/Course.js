import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
  console.log(props.courses);

  return props.courses.map((course) => (
    <React.Fragment key={course.id}>
      <Header name={course.name}></Header>
      <Content courses={course.parts}></Content>
      <Total courses={course.parts}></Total>
    </React.Fragment>
  ));
};
export default Course;
