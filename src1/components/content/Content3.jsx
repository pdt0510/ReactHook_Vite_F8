import { useEffect, useState } from 'react';

//Content3,
function Content() {
	const [count, setNUm] = useState(0);

	useEffect(() => {
		console.log(`rendered by Mounted or Re-rendered times: ${count}`);

		const timerId = setInterval(() => {
			console.log('timerId triggered');

			setNUm(count + 1);
		}, 2000);

		return () => {
			console.log('cleanup');
			return clearInterval(timerId);
		};
	}, [count]);

	return (
		<div>
			<br />
			<h1>Number: {count}</h1>
		</div>
	);
}

export default Content;
