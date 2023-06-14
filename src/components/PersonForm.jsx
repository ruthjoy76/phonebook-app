import { useState } from "react"
import personService from "../services/personService";

function PersonForm({persons, setPersons}) {

  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault()
     
    const personObject = {
      name: newPerson,
      number: newNumber, 
    };
  
    personService
    .createPerson(personObject)
    .then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewPerson("")
      setNewNumber("")
    })
    .catch((error) => console.log(error))
  };
  

  
  return (
    <form onSubmit={addPerson} className="flex flex-col gap-4 p-4 ml-px bg-purple-100 rounded-lg shadow-md">
    <div className="flex flex-col">
    <label>Full Name</label>
      <input 
         className="flex items-center justify-between bg-white rounded-lg shadow-md w-64 p-2 mb-1"
        type="text"
        value={newPerson}
        onChange={(event) => setNewPerson(event.target.value)}
        placeholder="Enter name"
      />
    </div>

    <div className="flex flex-col">
      <label>Phone Number</label>
      <input
        className="flex items-center justify-between bg-white rounded-lg shadow-md w-64 p-2 mb-2"
        type="text"
        value={newNumber}
        onChange={(event) => setNewNumber(event.target.value)}
        placeholder="Enter phone number"
      />
    </div>
  
    <button  
      className="bg-purple-500 hover:bg-purple-400 text-white font-bold w-24 py-2 px-3 border-b-4 border-purple-800 hover:border-purple-500 rounded"
      type="submit">
      Add
    </button>
       
  </form>
);
};

export default PersonForm;
