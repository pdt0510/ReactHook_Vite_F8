import './App.css';
import Content from './components/content/Content';
import { createContext, useState, useContext } from 'react';

const App = () => {
	return (
		<div className='App'>
			<Content />
		</div>
	);
};

export default App;
