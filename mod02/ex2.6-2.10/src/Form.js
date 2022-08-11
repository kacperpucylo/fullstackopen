
const Form = ({name, handleName, number, handleNumber}) => {
	return (
		<form>
			<div>
				name: <input value={name} onChange={handleName}/> 
			</div>
			<div>
				number: <input value={number} onChange={handleNumber}/>
			</div>
		</form>
	)
}

export default Form