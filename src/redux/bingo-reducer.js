import { updateFieldById } from '../util/update-field-by-id';
import { ACTIVATE_SQUARE, DEACTIVATE_SQUARE, LOAD_BOARD } from './bingo-types';

const initialState = null;

export default function bingoReducer(state = initialState, action) {
	const { type, id, payload } = action;
	switch (type) {
		case ACTIVATE_SQUARE:
			return state.map(updateFieldById(id, 'active', true));
		case DEACTIVATE_SQUARE:
			return state.map(updateFieldById(id, 'active', false));
		case LOAD_BOARD:
			return payload;
		default:
			return state;
	}
}
