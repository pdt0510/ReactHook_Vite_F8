import { memo, useRef, useState } from 'react';

//Content6, 7ms01ss
function Content(props) {
	const [num, setNUm] = useState(0);
	const times = useRef(0);

	return (
		<div>
			<br />
			<h1>
				Content: {num} (render: {times.current++} )
			</h1>
			<h1>{props.noChange ? '-> Props have no change' : `App: ${props.appNum}`} </h1>
			<h1></h1>
		</div>
	);
}

export default memo(Content); //5ms24ss
// export default Content;
