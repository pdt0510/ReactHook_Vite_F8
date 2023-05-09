import { useEffect, useState } from 'react';

//Content1, v30xx1
function Content() {
	const [num, setNUm] = useState(0);

	useEffect(() => {
		console.log('No dependencies ---');
	});

	useEffect(() => {
		console.log('[]: using dependency but no param');
	}, []);

	useEffect(() => {
		console.log('[num]: using dependency with param call num', num);
	}, [num]);

	const handleClick = () => {
		setNUm(num + 1);
	};

	return (
		<div>
			<h1>Number: {num}</h1>
			<button onClick={handleClick}>Click</button>
		</div>
	);
}

export default Content;
