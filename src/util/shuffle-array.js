import { swap } from './swap';

/**
 * Randomizes the positions of elements in `array`
 * @param {Array} array
 */
export function shuffleArray(array) {
	let curr = array.length,
		randomIndex;

	while (curr !== 0) {
		randomIndex = Math.floor(Math.random() * curr--);
		swap(array[curr], array[randomIndex]);
	}

	return array;
}
