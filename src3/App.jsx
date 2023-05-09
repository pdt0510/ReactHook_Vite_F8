import './App.css';
import { useCallback, useState, useMemo } from 'react';
import Content from './components/content/Content';

const App = () => {
	const [item, setItem] = useState(0);
	const [num, setNum] = useState(0);

	//1m40ss,
	// const calculation = expensiveCalculation(0); //re-render
	// const calculation = useMemo(() => expensiveCalculation(1), []); //no deps
	const calculation = useMemo(() => expensiveCalculation(num), [num]); //deps on num

	const handleAddItem = () => {
		setItem((c) => c + 1);
	};

	const handleAddOne = () => {
		setNum((c) => c + 1);
	};

	const renderContent = (num) => {
		const list = [];
		for (let idx = 0; idx < num; idx++) {
			list.push(<Content key={idx} />);
		}
		return list;
	};

	return (
		<div className='App'>
			<h1>Calculation: {calculation}</h1>
			<button onClick={handleAddItem}>Add item</button>
			<button onClick={handleAddOne}>Add num</button>
			{item > 0 && renderContent(item)}
		</div>
	);
};

// 1m40ss
const expensiveCalculation = (num) => {
	console.log('re-render');
	for (let i = 0; i < 1000000000; i++) {
		num += 1;
	}
	return num;
};

export default App;
