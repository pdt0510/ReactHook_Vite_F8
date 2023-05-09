import { useEffect, useLayoutEffect, useState } from 'react';

//Content4,
function Content() {
	const [count, setCount] = useState(0);

	// 07ss, 6ms22ss
	// useEffect(() => {
	useLayoutEffect(() => {
		if (count > 2) {
			setCount(0);
		}
	}, [count]);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<br />
			<h1>Number: {count}</h1>
			<button onClick={handleClick}>Click</button>
		</div>
	);
}

export default Content;
