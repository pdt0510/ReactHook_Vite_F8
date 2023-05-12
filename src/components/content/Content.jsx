import Paragraph from '../paragraph/Paragraph';

function Content(props) {
	console.log('Content re-rendered');

	return (
		<div>
			<h1>Content page</h1>
			<Paragraph />
		</div>
	);
}

export default Content;
