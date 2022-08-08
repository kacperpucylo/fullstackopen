
const App = () => {
	console.log("Frog")

	const now = new Date()
	const a = 10
	const b = 5
	
	return (
		<div>
			<p>Hello world! It is {now.toString()}</p>
			<p>
				{a} + {b} is {a + b}
			</p>
		</div>
	)
}

export default App
