import React from "react";
import DeleteButton from "./Delete";
const Person = ({ searchName, persons, filteredPersons, deleteHandler }) => {
  return searchName === ""
    ? persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <DeleteButton
            deleteHandler={deleteHandler}
            key={person.id}
          ></DeleteButton>
        </li>
      ))
    : filteredPersons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ));
};
export default Person;
