/**
 * Creates an update function for a specific index in the state
 * @param {Array} originalState State to update
 * @param {Function} update Update function
 * @param {number} index Index to update
 */
export function indexedStateUpdateFactory(originalState, update, index) {
	return (state) => {
		const stateCopy = [...originalState];
		stateCopy[index] = state;
		update(stateCopy);
	};
}
