const Hello = (props) => {
	return (
		<div>
			<p>Hello {props.name}, you are {props.age} yo!</p>
		</div>
	)
}

const App = () => {
	const name = "toad"
	const age = 5
	return (
		<div>
			<h1>Greetings</h1>
			<Hello name="frog" age={10}/>
			<Hello name={name} age={age}/>
		</div>
	)
}

export default App
