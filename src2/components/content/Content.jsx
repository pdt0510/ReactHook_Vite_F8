import { memo, useRef, useState } from 'react';

function Content(props) {
	const [num, setNUm] = useState(0);
	const times = useRef(0);

	return (
		<div>
			<br />
			<h1>
				Content: {num} (render: {times.current++} )
			</h1>
			<button onClick={props.handleClick}>Click</button> {/* 58ss */}
		</div>
	);
}

export default memo(Content);
