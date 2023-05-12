import Paragraph from '../paragraph/Paragraph';

function Content() {
	console.log('Content re-render');
	return (
		<div>
			<h1>Content page</h1>
			<Paragraph />
		</div>
	);
}

export default Content;
