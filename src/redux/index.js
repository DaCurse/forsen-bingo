import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './bingo-reducer';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
	const { logger } = require('redux-logger');
	middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
