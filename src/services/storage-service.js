const SQUARES_KEY = 'squares';
const SQUARE_STATE_KEY = 'squares-state';

/**
 * Stores the current game state in local storage
 * @param {Array} squares Array of current squares and their order
 * @param {Array<boolean>} squareState State of activated squares
 */
export function saveGameState(squares, squareState) {
	localStorage.setItem(SQUARES_KEY, JSON.stringify(squares));
	localStorage.setItem(SQUARE_STATE_KEY, JSON.stringify(squareState));
}

/**
 * Retrieves and parses the game state from local storage
 * Resets the game state if it's invalid
 */
export function getGameState() {
	try {
		const squares = JSON.parse(localStorage.getItem(SQUARES_KEY));
		const squareState = JSON.parse(localStorage.getItem(SQUARE_STATE_KEY));

		return { squares, squareState };
	} catch (e) {
		deleteGameState();
		return {};
	}
}

/**
 * Deletes the saved game state
 */
export function deleteGameState() {
	localStorage.removeItem(SQUARES_KEY);
	localStorage.removeItem(SQUARE_STATE_KEY);
}
