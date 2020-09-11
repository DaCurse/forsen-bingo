import { fetchSquares } from '../services/api-service';
import {
	ACTIVATE_SQUARE,
	CLEAR_BOARD,
	DEACTIVATE_SQUARE,
	LOAD_BOARD,
	SAVE_BOARD,
	SET_AUTO_SAVE,
} from './bingo-types';

export const activateSquare = (id) => ({
	type: ACTIVATE_SQUARE,
	id,
});

export const deactivateSquare = (id) => ({
	type: DEACTIVATE_SQUARE,
	id,
});

export const loadBoard = () => {
	return async (dispatch) => {
		const squares = (await fetchSquares()).map((square) => ({
			...square,
			active: false,
		}));
		// Bingo board should optimally be a square
		const tableSize = Math.ceil(Math.sqrt(squares.length));
		// Make sure free space is centered after shuffle
		const middle =
			tableSize * Math.floor(tableSize / 2) + Math.floor(tableSize / 2);
		squares.splice(middle, 0, { freeSquare: true, active: true });

		dispatch({
			type: LOAD_BOARD,
			payload: squares,
		});
	};
};

export const clearBoard = () => ({ type: CLEAR_BOARD });

export const saveBoard = () => ({ type: SAVE_BOARD });

export const setAutoSave = (value) => ({
	type: SET_AUTO_SAVE,
	payload: Boolean(value),
});
