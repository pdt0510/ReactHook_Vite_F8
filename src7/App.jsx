import './App.css';
import Content from './components/content/Content';
import { createContext, useState, useContext } from 'react';
import ThemeContext from './context/theme/ThemeContext';

const ChildComponent = () => {
	console.log('ChildComponent re-rendered');
	return <p>Child</p>;
};

const ParentComponent = ({ children }) => {
	console.log('ParentComponent re-rendered');
	const [count, setCount] = useState(1);

	return (
		<div>
			{/* v43xx1 */}
			<button onClick={() => setCount(count + 1)}>Parent render: {count}</button>
			{children}
		</div>
	);
};

//src7
const App = () => {
	console.log('App re-render -------------');
	return (
		<div className='App'>
			{/* v43xx1 */}
			<ParentComponent>
				<ChildComponent />
				<Content />
			</ParentComponent>
		</div>
	);
};

export default App;
