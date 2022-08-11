const List = ({persons}) => {
	return (
		<div>
			{persons.map((person) => (
				<p key={person.name}>{person.name}&nbsp;{person.number}</p>
			))}
		</div>
	)
}

export default List