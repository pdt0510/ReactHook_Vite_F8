import './App.css';
import { useState } from 'react';
import Content from './components/content/Content';

function App() {
	const [num, setNUm] = useState(0);

	const handleStart = () => {
		setNUm(num + 1);
	};

	return (
		<div className='App'>
			<h1>App: {num}</h1>
			<Content noChange={true} />
			<Content appNum={num} /> {/* 7ms01ss */}
			<button onClick={handleStart}>Click</button>
		</div>
	);
}

export default App;
