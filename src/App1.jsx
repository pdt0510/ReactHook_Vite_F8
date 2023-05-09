import './App.css';
import { useReducer } from 'react';

//init state
const initState = 0;

//actions
const upAction = 'up';
const downAction = 'down';

//reducer
const reducer = (state, action) => {
	console.log('action ---', action);
	if (action === upAction) {
		return state + 1;
	}

	if (action === downAction) {
		return state - 1;
	}

	return 'Action failed';
};

//App1
const App = () => {
	const [count, dispatch] = useReducer(reducer, initState);

	return (
		<div className='App'>
			<h1>{count}</h1>
			{/* <button onClick={() => dispatch({ test: 123 })}>Down</button> */}
			<button onClick={() => dispatch(downAction)}>Down</button>
			<button onClick={() => dispatch(upAction)}>Up</button>
		</div>
	);
};

export default App;
