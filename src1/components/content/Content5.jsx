import { useEffect, useRef, useState } from 'react';

//Content5,
function Content() {
	const [num, setNUm] = useState(0);

	let timerId = useRef();
	console.log(timerId.current); //6ms12ss

	const handleStart = () => {
		timerId.current = setInterval(() => {
			setNUm((prevNum) => prevNum + 1);
		}, 500);
		console.log('start timerId ---', timerId.current);
	};

	const handleStop = () => {
		if (timerId.current) {
			clearInterval(timerId.current);
			console.log('stop timerId ---', timerId.current);
		}
	};

	return (
		<div>
			<br />
			<h1>{num}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</div>
	);
}

let timerId = null; //4ms41ss
function Content1() {
	const [num, setNUm] = useState(0);

	const handleStart = () => {
		timerId = setInterval(() => {
			setNUm((prevNum) => prevNum + 1);
		}, 500);
		console.log('start ---', timerId);
	};

	const handleStop = () => {
		if (timerId) {
			clearInterval(timerId);
			console.log('stop ---', timerId);
		}
	};

	return (
		<div>
			<br />
			<h1>{num}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</div>
	);
}

export default Content;
