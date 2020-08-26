import React from 'react';
import '../assets/css/app.scss';
import bingo from '../data/bingo.json';
import BingoBoard from './BingoBoard';

export function App() {
	return (
		<div className="app">
			<BingoBoard {...bingo} />
			<footer>
				<a href="https://redd.it/ighswa">Original post</a> by /u/five_cacti
				|&nbsp;
				<a href="#">GitHub</a>
			</footer>
		</div>
	);
}
