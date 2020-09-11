const SQUARES_KEY = 'squares';

/**
 * Stores the current game state in `localStorage`
 * @param {Array} squares Array of current squares and their order
 * @param {Array<boolean>} squareState State of activated squares
 */
export function saveGameState(squares) {
	try {
		localStorage.setItem(SQUARES_KEY, JSON.stringify(squares));
	} catch {
		// Ignore write errors
	}
}

/**
 * Retrieves and parses the game state from `localStorage`
 * Resets the game state if it's invalid
 */
export function loadGameState() {
	try {
		const serializedState = localStorage.getItem(SQUARES_KEY);
		if (!serializedState) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (e) {
		deleteGameState();
		return undefined;
	}
}

/**
 * Deletes the saved game state
 */
export function deleteGameState() {
	localStorage.removeItem(SQUARES_KEY);
}
