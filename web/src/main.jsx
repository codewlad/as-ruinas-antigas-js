import React from 'react';
import ReactDOM from 'react-dom/client';

import { ItemsProvider } from './providers/items';

import GlobalStyles from './styles/global';
import { themeLight } from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { EventsProvider } from './providers/events';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={themeLight}>
			<EventsProvider>
				<ItemsProvider>
					<GlobalStyles />
					<Home />
				</ItemsProvider>
			</EventsProvider>
		</ThemeProvider>
	</React.StrictMode>
);
