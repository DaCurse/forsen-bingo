import axios from 'axios';
import { stringify } from 'querystring';

// Creating and configuring axios instance
const api = axios.create({
	baseURL: 'https://forsenbingo.tk/api/bingo',
});
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function responseHandler(response) {
	return response;
}

function errorHandler(error) {
	if (process.env.NODE_ENV === 'development') {
		console.dir(error);
	}
}

api.interceptors.response.use(responseHandler, errorHandler);

/**
 * Retrieves a list of bingo squares from the API
 */
export async function getSquares() {
	const response = await api.get('squares');
	return response.data;
}

/**
 * Logs an activation of a square
 * @param {number} id ID of the square
 */
export function activateSquare(id) {
	api.post('activate', stringify({ id }));
}

/**
 * Logs a deactivation of a square
 * @param {number} id ID of the square
 */
export function deactivateSquare(id) {
	api.post('deactivate', stringify({ id }));
}
