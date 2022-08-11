import { useState } from 'react'
import List from './List'
import Form from './Form'
import Button from './Button'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')

  const handleNameChange = (event) => {
	setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
	setNumber(event.target.value)
  }

  const handleSubmit = (event) => {
	event.preventDefault()
	const arr = {name: newName, number: newNumber}
	if (!persons.find((person) => {
		if (person.name === newName) {return true}
		return false;
	})) {
		setPersons(persons.concat(arr))
	}
	else {
		window.alert(`${newName} is already added to the phonebook`)
	}
  }

  return (
    <div>
		<h2>Phonebook</h2>
    	<Form name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange}/>
		<Button handleSubmit={handleSubmit}/>
    	<h2>Numbers</h2>
		<List persons={persons} />
    </div>
  )
}

export default App