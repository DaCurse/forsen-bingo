/**
 * Returns a callback for `Array.protoype.map` that would update a single field
 * in an element based on its ID
 * @param {number} id ID of the object to update
 * @param {string} field Name of the field to update
 * @param {any} value New value for the field
 */
export function updateFieldById(id, field, value) {
	return (obj) => (obj.id === id ? { ...obj, [field]: value } : obj);
}
