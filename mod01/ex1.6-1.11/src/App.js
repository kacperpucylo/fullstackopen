import { useState } from 'react'

const StatisticLine = (props) => {
	if (props.text === "positive") {
		return (
			<tr>
				<td>{props.text}&nbsp;&nbsp;	</td>
				<td>{props.value}%</td>
			</tr>
		)
	}
	return (
		<tr>
			<td>{props.text}&nbsp;&nbsp;	</td>
			<td>{props.value}</td>
		</tr>
	)
}

const Statistics = (props) => {
	if (props.good + props.neutral + props.bad) {
		return (
			<table>
				<tbody>
					<StatisticLine text="good" value={props.good}/>
					<StatisticLine text="neutral" value={props.neutral}/>
					<StatisticLine text="bad" value={props.bad}/>
					<StatisticLine text="all" value={props.good + props.neutral + props.bad}/>
					<StatisticLine text="average" value={(props.good * 1 + props.bad * -1)/(props.good + props.neutral + props.bad)}/>
					<StatisticLine text="positive" value={(props.good/(props.good + props.neutral + props.bad)) * 100}/>
				</tbody>
			</table>
		)
	}
	return (
		<div>
			<p>No feedback given</p>
		</div>
	)
}

const Button = (props) => {
	return (
		<>
			<button onClick={props.func}>{props.text}</button>
		</>
	)
}

const App = () => {
  // save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const incrementGood = () => {
		setGood(good + 1)
	}

	const incrementNeutral = () => {
		setNeutral(neutral + 1)
	}

	const incrementBad = () => {
		setBad(bad + 1)
	}

	return (
		<div>
			<h1>give feedback</h1>
			<div>
				<Button func={incrementGood} text="good"/>
				<Button func={incrementNeutral} text="neutral"/>
				<Button func={incrementBad} text="bad"/>
			</div>
			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad}/>
    	</div>
	)
}

export default App
