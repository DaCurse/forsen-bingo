/**
 * Splits an array to smaller arrays of with a length of `size`. If `array` can't be
 * split evenly, the final chunk will content the remaining elements.
 * @param {Array} array Source arary
 * @param {*} size Size of each chunk
 */
export function chunk(array, size) {
	const temp = [];
	for (let i = 0; i < array.length; i += size) {
		temp.push(array.slice(i, i + size));
	}

	return temp;
}
