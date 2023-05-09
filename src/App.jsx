import './App.css';
import { useReducer, useRef, useState } from 'react';

//init state
const initState = [];

//actions
const addTodo = 'addTodo';
const removeTodo = 'removeTodo';

//action fn, v41xx2
const setJobFn = (payload) => {
	return {
		type: addTodo,
		payload,
	};
};

const delJobFn = (id) => {
	return {
		type: removeTodo,
		payload: { id },
	};
};

//reducer
const todoReducer = (state, dispatchAction) => {
	const { type, payload } = dispatchAction;
	if (type === addTodo) {
		return [...state, payload];
	}
	if (type === removeTodo) {
		return state.filter((item) => item.id !== payload.id);
	}
	return 'Action failed';
};

//App2,
const App = () => {
	const [todo, setTodo] = useState('');
	const [todoList, dispatchAction] = useReducer(todoReducer, initState);

	const handleOnchange = (event) => {
		const { value } = event.target;
		setTodo(value);
	};

	const renderList = (list) => {
		return list.map((item) => {
			return (
				<h3 key={item.id}>
					{item.id}: {item.name} ---{' '}
					<span
						style={{ cursor: 'pointer', color: 'blue' }}
						onClick={() => dispatchAction(delJobFn(item.id))} //v41xx2
					>
						X
					</span>
				</h3>
			);
		});
	};

	const handleAddTodo = () => {
		const payload = {
			name: todo,
			id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
		};
		dispatchAction(setJobFn(payload)); //v41xx2
		setTodo('');
	};

	return (
		<div className='App'>
			<input
				type='text'
				name='todo'
				value={todo}
				placeholder='Add a todo . . .'
				onChange={handleOnchange}
			/>
			<button onClick={handleAddTodo}>Add todo</button>
			{todoList.length > 0 && (
				<>
					<h1>Todo list</h1>
					{renderList(todoList)}
				</>
			)}
		</div>
	);
};

//App2, v41xx1
const App2 = () => {
	const [todo, setTodo] = useState('');
	const [todoList, dispatchAction] = useReducer(todoReducer, initState);

	const handleOnchange = (event) => {
		const { value } = event.target;
		setTodo(value);
	};

	const handleAddTodo = () => {
		dispatchAction({
			type: addTodo,
			payload: {
				id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
				name: todo,
			},
		});
		setTodo('');
	};

	const handleDel = (id) => {
		dispatchAction({
			type: removeTodo,
			payload: { id },
		});
	};

	const renderList = (list) => {
		return list.map((item) => {
			return (
				<h3 key={item.id}>
					{item.id}: {item.name} ---{' '}
					<span
						style={{ cursor: 'pointer', color: 'blue' }}
						onClick={() => handleDel(item.id)}
					>
						X
					</span>
				</h3>
			);
		});
	};

	return (
		<div className='App'>
			<input
				type='text'
				name='todo'
				value={todo}
				placeholder='Add a todo . . .'
				onChange={handleOnchange}
			/>
			<button onClick={handleAddTodo}>Add todo</button>
			{todoList.length > 0 && (
				<>
					<h1>Todo list</h1>
					{renderList(todoList)}
				</>
			)}
		</div>
	);
};

export default App;
