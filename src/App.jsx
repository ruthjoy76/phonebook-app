import { useState } from 'react';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([]);

  return (
    <div className="bg-purple-200 container mx-auto px-4 py-8">
      <h1 className="text-purple-500 text-2xl font-bold mb-4">Phonebook</h1>
      <PersonList persons={persons} setPersons={setPersons} />
      <PersonForm persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;