
const Header = ({name}) => <h1>{name}</h1>

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Content = ({parts}) => {
	return (
		<div>
			{parts.map((part) => (
				<Part key={part.id} name={part.name} exercises={part.exercises} />
			))}
		</div>
	)
}

const Total = ({parts}) => {
	const total = parts.reduce((sum, part) => {return sum + part.exercises}, 0)

	return <strong>total of {total} exercises</strong>
}

const Course = ({course}) => {
	return (
		<div>
			<Header name={course.name}/>
			<Content parts={course.parts}/>
			<Total parts={course.parts}/>
		</div>
	)
}

export default Course