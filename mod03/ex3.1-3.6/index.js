const { json } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => response.send("<h1>greetings</h1>"))

app.get('/info', (request, response) => response.send(`<p>Phonebook has info for ${persons.length} people</p></p>${new Date()}</p>`))

app.get('/api/persons', (request, response) => response.json(persons))

app.get('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id)
	const person = persons.find(person => person.id === id)
	if (person) {
		response.json(person)
	}
	else {
		response.status('404').end()
	}
})

app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id)
	persons = persons.filter(note => note.id !== id)

	response.status(204).end()
})

app.post('/api/persons', (request, response) => {
	const person = request.body

	const checkDuplicates = () => {
		for (i = 0; i < persons.length; i++) {
			if (persons[i].name === person.name) {
				return true
			}
		}
		return false
	}

	if (!person) {
		return response.status('400').json({
			error: 'Content missing'
		})
	}
	person.id = Math.floor(Math.random() * 1024)
	if (!person.name) {
		return response.status('400').json({
			error: 'Name missing'
		})
	}
	if (!person.number) {
		return response.status('400').json({
			error: 'Number missing'
		})
	}
	if (checkDuplicates()) {
		return response.status('400').json({
			error: 'Name already exists'
		})
	}
	persons = persons.concat(person)
	response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})