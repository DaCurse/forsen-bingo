import { getByCoord } from './get-by-coord';

/**
 * Takes an array of squares with length `size`^2 and `size` amount coordinates
 * and checks if all squares in those coordinates are active
 * @param {Array} board Array of squares
 * @param {number} size Size of the board
 * @param {Array} xs Array of x coordinates
 * @param {Array} ys Array of y coordinates
 */
export function checkIntersections(board, size, xs, ys) {
	let result = false;
	for (let i = 0; i < size; i++) {
		const square = getByCoord(board, size, ys[i], xs[i]);
		if (!square.active) {
			return false;
		}
		if (!result) {
			result = square.active;
		} else if (square.active !== result) {
			return false;
		}
	}
	return result;
}
