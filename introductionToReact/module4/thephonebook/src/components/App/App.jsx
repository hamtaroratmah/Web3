import {useState} from 'react'
import React from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 0,
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const addName = (e) => {
    e.preventDefault()
    const present = persons.filter(person=>person.name===newName).length>0
    if(present){
      alert(`${newName} is already added to phonebook`)
    }else{
      const newPerson = {id: persons.length, name: newName, number: newNumber}
      setPersons(persons.concat(newPerson))
    }

    setNewName('')
    setNewNumber('')
  }

  const changeName = (e) => {
    setNewName(e.target.value)
  }

  const changeNumber = (e)=>{
    setNewNumber(e.target.value)
  }

  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
          <div>
            name: <input value={newName} onChange={changeName}/>
          </div>
          <div>
            number: <input value={newNumber} onChange={changeNumber}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
          {persons.map((person) => (
              <li key={person.id}>{person.name}  {person.number}</li>
          ))}
        </ul>
      </div>
  )
}

export default App