import { createContext, useState } from 'react';

const ThemeContext = createContext(); // 12ms04ss

// 13ms07ss
export const ThemeProvider = (props) => {
	console.log('ThemeProvider re-rendered ------------');

	const [light, setTheme] = useState(true);

	const handleToggle = () => {
		setTheme(!light);
	};

	// 16ms20ss
	const valObj = {
		lightTheme: light,
		handleToggleFn: handleToggle,
	};

	// 13ms07ss
	return <ThemeContext.Provider value={valObj}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContext; // 12ms04ss
