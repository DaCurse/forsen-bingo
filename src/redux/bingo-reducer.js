import { updateFieldById } from '../util/update-field-by-id';
import { ACTIVATE_SQUARE, DEACTIVATE_SQUARE, LOAD_BOARD } from './bingo-types';

const initialState = {
	autoSave: false,
	squares: null,
};

export default function bingoReducer(state = initialState, action) {
	const { type, id, payload } = action;
	const { squares } = state;
	switch (type) {
		case ACTIVATE_SQUARE:
			return {
				...state,
				squares: squares.map(updateFieldById(id, 'active', true)),
			};
		case DEACTIVATE_SQUARE:
			return {
				...state,
				squares: squares.map(updateFieldById(id, 'active', false)),
			};
		case LOAD_BOARD:
			return { ...state, squares: payload };
		default:
			return state;
	}
}
