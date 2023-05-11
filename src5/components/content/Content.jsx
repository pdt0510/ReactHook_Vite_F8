import Paragraph from '../paragraph/Paragraph';

function Content(props) {
	return (
		<div>
			<h1>Content page</h1>
			<Paragraph theme={props.theme} /> {/* 31ss */}
		</div>
	);
}

export default Content;
