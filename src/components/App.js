import React from 'react';
import '../assets/css/app.scss';
import bingo from '../data/bingo.json';
import BingoBoard from './BingoBoard';

export function App() {
	const { title, squares } = bingo;
	return (
		<div className="app">
			<BingoBoard title={title} squares={shuffleSquares(squares)} />
			<footer>
				<a href="https://redd.it/ighswa">Original post</a> by /u/five_cacti
				|&nbsp;
				<a href="https://github.com/DaCurse/forsen-bingo">GitHub</a>
			</footer>
		</div>
	);
}

function shuffleSquares(arr) {
	let curr = arr.length,
		rand;

	while (curr !== 0) {
		rand = Math.floor(Math.random() * curr--);
		[arr[curr], arr[rand]] = [arr[rand], arr[curr]];
	}

	return arr;
}
