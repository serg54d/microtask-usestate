import React, { useState } from 'react';
import './App.css';

function App() {
	// let a = 1;

	let [a, setA] = useState(1)

	const onClickHandler = () => {
		setA(++a);
		console.log(a);
	}

	const onClickHandlerNull = () => {
		setA(a = 0);
		console.log(a);
	}


	return (
		<div className="App">
			<p>{a}</p>
			<button onClick={onClickHandler}>plus</button>
			<button onClick={onClickHandlerNull}>null</button>
		</div>
	);
}

export default App;
