import './Paragraph.scss';
import { useContext } from 'react';
import ThemeContext from '../../context/theme/ThemeContext';

function Paragraph(props) {
	console.log('Paragraph re-rendered');

	const isLight = useContext(ThemeContext).lightTheme; //16ms20ss

	return (
		<div>
			<h4>Using useContext hook in refactoring code</h4>
			<p className={`${isLight ? '' : 'dark'}`}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
				non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	);
}

export default Paragraph;
