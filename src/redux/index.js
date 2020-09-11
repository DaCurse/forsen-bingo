import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loadGameState } from '../services/storage-service';
import rootReducer from './bingo-reducer';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
	const { logger } = require('redux-logger');
	middleware.push(logger);
}

const savedState = loadGameState();
const store = createStore(
	rootReducer,
	savedState,
	applyMiddleware(...middleware),
);

export default store;
