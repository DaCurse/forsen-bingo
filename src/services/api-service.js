import axios from 'axios';
import { stringify } from 'querystring';

const API_URL = 'https://forsenbingo.tk/api/bingo';

export async function getSquares() {
	const response = await axios.get(`${API_URL}/squares`);
	return response.data;
}

function post(endpoint, data) {
	return axios.post(`${API_URL}/${endpoint}`, stringify(data), {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	});
}

export async function activateSquare(id) {
	await post('activate', { id });
}

export async function deactivateSquare(id) {
	await post('deactivate', { id });
}
