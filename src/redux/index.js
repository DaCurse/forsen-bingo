import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loadGameState, saveGameState } from '../services/storage-service';
import rootReducer from './bingo-reducer';

const middleware = [thunk];
const composeEnhancers =
	(process.env.NODE_ENV !== 'production' && // Make sure Redux DevTools is not available in production
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const savedState = loadGameState();
const store = createStore(rootReducer, savedState, enhancer);

store.subscribe(() => {
	const state = store.getState();
	if (state.autoSave) {
		saveGameState(state);
	}
});

export default store;
