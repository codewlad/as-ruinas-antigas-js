import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/global';
import { themeLight } from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={themeLight}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	</React.StrictMode>
);
