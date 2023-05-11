import './App.css';
import Content from './components/content/Content';
import { createContext, useState, useContext } from 'react';
import ThemeContext from './context/theme/ThemeContext';

const App = () => {
	const handleToggleFn = useContext(ThemeContext).handleToggleFn; //16ms20ss

	return (
		<div className='App'>
			<button onClick={handleToggleFn}>Toggle them</button>
			<Content />
		</div>
	);
};

export default App;
