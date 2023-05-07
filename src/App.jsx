import './App.css';
import { useState } from 'react';

const order = [100, 200, 300];

//app1
function App() {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(100);
	const [init, setInit] = useState(() => {
		const total = order.reduce((total, cur) => total + cur); //12ms31ss
		return total;
	});
	const [info, setInfo] = useState({
		name: 'PDT',
		age: 30,
	});

	const handleClick = () => {
		setCounter(counter + 1);
		setCounter2(counter2 - 1);

		setCounter(counter + 2);
		setCounter2(counter2 - 2);

		//last ones used for a render, 9ms23ss
		setCounter(counter + 3);
		setCounter2(counter2 - 3);
		setInit(init + 1);

		// 15ms21ss
		setInfo({
			...info,
			gender: 'male',
		});
	};

	const handleClick2 = () => {
		//10ms53ss
		console.log(counter);
		setCounter((curState) => curState + 1);
		setCounter((curState) => curState + 1);
		setCounter((curState) => curState + 1);
	};

	return (
		<div className='App'>
			<h1>Counter 1: {counter}</h1>
			<h1>Counter 2: {counter2}</h1>
			<h1>Init: {init}</h1>
			<h1>Info: {JSON.stringify(info)}</h1> {/* 15ms21ss */}
			<button onClick={handleClick}>Click 1</button>
			<button onClick={handleClick2}>Callback Click</button>
		</div>
	);
}

export default App;
