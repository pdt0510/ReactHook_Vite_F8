import { useState } from 'react';
import './App.css';
import Content from './components/content/Content';

const App = () => {
	const [light, setTheme] = useState(true);
	const handleToggle = () => {
		setTheme(!light);
	};

	return (
		<div className='App'>
			<button onClick={handleToggle}>Toggle them</button>
			<Content theme={light} /> {/* 31ss */}
		</div>
	);
};

export default App;
