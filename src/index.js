import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import './assets/css/index.scss';
import App from './components/App';
import './components/Maintenance';
import Maintenance from './components/Maintenance';
import store from './redux';

ReactDOM.render(
	process.env.MAINTENANCE ? (
		<Maintenance />
	) : (
		<Provider store={store}>
			<App />
		</Provider>
	),
	document.getElementById('root'),
);
