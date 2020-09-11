/**
 * Opens a confirm dialog and calls `callback` if `confirm` returns true
 * @param {string} prompt Prompt for the dialog
 * @param {Function} callback Function to call
 */
export function confirmAction(prompt, callback) {
	if (confirm(prompt)) {
		callback();
	}
}
