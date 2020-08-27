import React, { useEffect, useState } from 'react';
import '../assets/css/app.scss';
import { getSquares } from '../services/api-service';
import BingoBoard from './BingoBoard';

export function App() {
	const [squares, setSquares] = useState(null);

	useEffect(() => {
		if (!squares) {
			getSquares().then((squares) => setSquares(squares));
		}
	}, []);

	if (squares) {
		return (
			<div className="app">
				<BingoBoard title="Forsen Mega Bingo" squares={squares} />
				<footer>
					<a href="https://redd.it/ighswa">Original post</a> by /u/five_cacti
					|&nbsp;
					<a href="https://github.com/DaCurse/forsen-bingo">GitHub</a>
				</footer>
			</div>
		);
	}

	return <div className="loading">Loading</div>;
}
