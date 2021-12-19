import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form.js";
import Person from "./components/Person";
import DeleteButton from "./components/Delete";
//import axios from "axios";
import phoneService from "./services/phoneService";
const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(...persons);
  //every change on search, executes a map that search for letters that are included un the name, if you empty the searchbar all elements are show
  const nameSearchHandler = (event) => {
    setSearchName(event.target.value);
    const search = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPersons(search);
  };
  const nameHandler = (event) => {
    setNewName(event.target.value);
  };
  const numHandler = (event) => {
    setNewNumber(event.target.value);
  };

  const deleteHandler = (event) => {
    phoneService.deletePhone(event.id);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
    };
    ///filter->empty or filled array
    ///find->undefined or the object
    //So with filter we have to check the size of the array, with find we can check if is false (false===undefined)
    if (persons.find((person) => person.name === newName)) {
      // if (persons.filter((person) => person.name === newName).length === 0) {
      //   setPersons(persons.concat(newObject));
      // }
      alert(`${newName} is already added to the phonebook.`);
    } else {
      phoneService
        .createPhone(newObject)
        .then((newObject) => setPersons(persons.concat(newObject)));
    }
    setNewName("");
    setNewNumber("");
  };
  useEffect(() => {
    phoneService.getAllPhones().then((initialList) => setPersons(initialList));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        nameSearchHandler={nameSearchHandler}
        searchValue={searchName}
      ></Filter>

      <h2>Add New </h2>
      <Form
        submitHandler={submitHandler}
        nameHandler={nameHandler}
        numHandler={numHandler}
        newName={newName}
        newNumber={newNumber}
      ></Form>
      <h2>Numbers</h2>
      <Person
        searchName={searchName}
        persons={persons}
        filteredPersons={filteredPersons}
        deleteHandler={deleteHandler}
      ></Person>
    </div>
  );
};

export default App;
