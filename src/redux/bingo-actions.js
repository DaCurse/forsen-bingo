import {
	fetchSquares,
	logActivateSquare,
	logDeactivateSquare,
} from '../services/api-service';
import { ACTIVATE_SQUARE, DEACTIVATE_SQUARE, LOAD_BOARD } from './bingo-types';

export const activateSquare = (id) => (
	logActivateSquare(id),
	{
		type: ACTIVATE_SQUARE,
		id,
	}
);

export const deactivateSquare = (id) => (
	logDeactivateSquare(id),
	{
		type: DEACTIVATE_SQUARE,
		id,
	}
);

export const loadBoard = () => {
	return async (dispatch) => {
		const squares = (await fetchSquares()).map((square) => ({
			...square,
			active: false,
		}));
		// Bingo board should optimally be a square
		const tableSize = Math.ceil(Math.sqrt(squares.length));
		// Make sure free space is centered after shuffle
		const freePos = squares.findIndex((square) => square.freeSquare);
		const middle =
			tableSize * Math.floor(tableSize / 2) + Math.floor(tableSize / 2);
		squares.splice(freePos, 1); // Remove free square thats being sent from the server for now
		squares.splice(middle, 0, { freeSquare: true, active: true });

		dispatch({
			type: LOAD_BOARD,
			payload: squares,
		});
	};
};
