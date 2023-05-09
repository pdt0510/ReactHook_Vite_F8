import './App.css';
import { useCallback, useState } from 'react';
import Content from './components/content/Content';

//App1
function App() {
	const [num, setNUm] = useState(0);

	const handleClick = useCallback(() => {
		setNUm((prevState) => prevState + 1); //6ms20ss
	}, []);

	// 58ss
	// const handleClick = () => {
	// 	setNUm(num + 1);
	// };

	return (
		<div className='App'>
			<h1>App: {num}</h1>
			<Content handleClick={handleClick} />
		</div>
	);
}

export default App;
