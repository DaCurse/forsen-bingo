import {
	logActivateSquare,
	logDeactivateSquare,
} from '../services/api-service';
import { saveGameState } from '../services/storage-service';
import { updateFieldById } from '../util/update-field-by-id';
import {
	ACTIVATE_SQUARE,
	CLEAR_BOARD,
	DEACTIVATE_SQUARE,
	LOAD_BOARD,
	SAVE_BOARD,
	SET_AUTO_SAVE,
} from './bingo-types';

const initialState = {
	autoSave: false,
	squares: null,
};

export default function bingoReducer(state = initialState, action) {
	const { type, id, payload } = action;
	const { squares } = state;
	switch (type) {
		case ACTIVATE_SQUARE:
			logActivateSquare(id);
			return {
				...state,
				squares: squares.map(updateFieldById(id, 'active', true)),
			};
		case DEACTIVATE_SQUARE:
			logDeactivateSquare(id);
			return {
				...state,
				squares: squares.map(updateFieldById(id, 'active', false)),
			};
		case LOAD_BOARD:
			return { ...state, squares: payload };
		case CLEAR_BOARD:
			return {
				...state,
				squares: squares.map((square) =>
					square.freeSquare ? square : { ...square, active: false },
				),
			};
		case SAVE_BOARD:
			saveGameState(state);
			return state;
		case SET_AUTO_SAVE:
			return {
				...state,
				autoSave: payload,
			};
		default:
			return state;
	}
}
