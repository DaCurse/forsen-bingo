import axios from 'axios';

const API_URL = 'http://64.227.20.96/api/bingo';

export async function getSquares() {
	const response = await axios.get(`${API_URL}/squares`);
	return response.data;
}
