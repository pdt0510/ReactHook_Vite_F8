import { useEffect, useState } from 'react';

//Content2,
function Content() {
	const [num, setNUm] = useState(0);

	useEffect(() => {
		const timerId = setInterval(() => {
			setNUm(num + 1);
		}, 2000);

		//v30xx2
		return () => {
			return clearInterval(timerId);
		};
	}, [num]);

	return (
		<div>
			<br />
			<h1>Number: {num}</h1>
		</div>
	);
}

export default Content;
