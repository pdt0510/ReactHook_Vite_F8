import { createContext, useState } from 'react';

const ThemeContext = createContext();
export const ThemeProvider = (props) => {
	const [light, setTheme] = useState(true);

	const handleToggle = () => {
		setTheme(!light);
	};

	const valObj = {
		lightTheme: light,
		handleToggleFn: handleToggle,
	};

	return <ThemeContext.Provider value={valObj}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContext;
