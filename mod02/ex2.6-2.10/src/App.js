import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import Button from './Button'
import personService from './services/persons'
import Notification from './Notification'

const App = () => {
	const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [message, setMessage] = useState(null)

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
		personService.create(arr).then(response => {
			setMessage(`${newName} has been added`)
			setTimeout(() => {
				setMessage(null)
			}, 5000)
			setPersons(persons.concat(response.data))
			setNewName('')
			setNumber('')
		})
	}
	else {
		window.alert(`${newName} is already added to the phonebook`)
	}
  }

  useEffect(() => {
	personService.getAll().then(response => {
		setPersons(response.data)
	})
  }, [])

  return (
    <div>
		<h2>Phonebook</h2>
		<Notification message={message} />
    	<Form name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange}/>
		<Button handleSubmit={handleSubmit}/>
    	<h2>Numbers</h2>
		<List persons={persons} set={setPersons} />
    </div>
  )
}

export default App