const Hello = (props) => {
	return (
		<div>
			<p>Hello {props.name}!</p>
		</div>
	)
}

const App = () => {
	return (
		<div>
			<h1>Greetings</h1>
			<Hello name="frog"/>
			<Hello name="toad"/>
			<Hello name="turtle"/>
			<Hello name="rat"/>
		</div>
	)
}

export default App
