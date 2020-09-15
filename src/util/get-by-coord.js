/**
 * Uses math to access an element in a `arr` like it's a matrix of size `size`
 * given `x` and `y` positions
 * @param {Array} arr
 * @param {number} size
 * @param {number} x
 * @param {number} y
 */
export function getByCoord(arr, size, x, y) {
	return arr[x * size + y];
}
