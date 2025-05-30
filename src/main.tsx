import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reduxTK/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</BrowserRouter>
);
