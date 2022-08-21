import personService from './services/persons'

const List = ({persons, set}) => {

	const delHandler = (id) => {
		if (window.confirm("Delete contact?"))
		{
			personService.del(id).then(() => personService.getAll().then(response => {
				set(response.data)
			}))
		}
	}

	return (
		<div>
			{persons.map((person) => (
				<div>
					<p key={person.id}>
						{person.name}&nbsp;{person.number}&nbsp;&nbsp;
						<button type="submit" onClick={() => {delHandler(person.id)}}>delete</button>
					</p>
				</div>
			))}
		</div>
	)
}

export default List