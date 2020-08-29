const SQUARES_KEY = 'squares';
const SQUARE_STATE_KEY = 'squares-state';

/**
 * Stores the current game state in local storage
 * @param {Array} squares Array of current squares and their order
 * @param {Array<boolean>} squareState State of activated squares
 */
export function saveState(squares, squareState) {
	localStorage.setItem(SQUARES_KEY, JSON.stringify(squares));
	localStorage.setItem(SQUARE_STATE_KEY, squareState.map(Number));
}

/**
 * Retrieves and parses the game state from local storage
 */
export function getState() {
	const squares = localStorage.getItem(SQUARES_KEY);
	const squareState = localStorage.getItem(SQUARE_STATE_KEY);

	if (!squares || !squareState) return {};

	return {
		squares: JSON.parse(squares),
		squareState: squareState.split(',').map(Boolean),
	};
}

/**
 * Deletes the saved game state
 */
export function deleteState() {
	localStorage.removeItem(SQUARES_KEY);
	localStorage.removeItem(SQUARE_STATE_KEY);
}
