import React, { useEffect, useState } from 'react';
import '../assets/css/bingo-board.scss';
import { chunk } from '../util/chunk';
import { indexedStateUpdateFactory } from '../util/indexed-state-update';
import FreeSpace from './FreeSpace';
import Square from './Square';

function BingoBoard(props) {
	const { title, squares } = props;

	const [squareState, setSquareState] = useState(
		Array(squares.length).fill(false),
	);
	const [winner, setWinner] = useState(false);

	// Creates a state update function for a square at a specific index
	const setActiveFactory = indexedStateUpdateFactory.bind(
		null,
		squareState,
		setSquareState,
	);

	// Bingo board should optimally be a square
	const tableSize = Math.ceil(Math.sqrt(squares.length));

	// Make sure free space is centered after shuffle
	const freePos = squares.findIndex((square) => square.freeSquare);
	const middle =
		tableSize * Math.floor(tableSize / 2) + Math.floor(tableSize / 2);
	[squares[middle], squares[freePos]] = [squares[freePos], squares[middle]];

	// Very efficient win checking algorithm Kapp
	useEffect(() => {
		const rows = chunk(squareState, tableSize);
		const fullRow = rows.some((row) => row.every((col) => col === true));
		const fullCol = rows
			.reduce(
				(counters, row) =>
					counters.map((counter, index) => counter + row[index]),
				Array(tableSize).fill(0),
			)
			.some((counter) => counter === tableSize);

		let fullDiag = true,
			fullAntiDiag = true;
		for (let i = 0; i < tableSize; i++) {
			if (!rows[i][i]) {
				fullDiag = false;
			}
			if (!rows[i][tableSize - i - 1]) {
				fullAntiDiag = false;
			}
		}

		setWinner(fullRow || fullDiag || fullAntiDiag || fullCol);
	}, [squareState]);

	const squaresToRender = squares.map((square, index) =>
		square.freeSquare ? (
			<FreeSpace
				active={squareState[index]}
				setActive={setActiveFactory(index)}
				key={index}
			/>
		) : (
			<Square
				{...squares[index]}
				active={squareState[index]}
				setActive={setActiveFactory(index)}
				key={index}
			/>
		),
	);

	const squareTable = chunk(
		squaresToRender,
		tableSize,
	).map((columns, index) => <tr key={index}>{columns}</tr>);

	return (
		<div className="bingo-board">
			<h1 className="title">
				{title}
				{winner && <span className="winner">&nbsp;-&nbsp;Winner!</span>}
			</h1>
			<div>Date: {new Date().toLocaleDateString()}</div>

			<table>
				<tbody>{squareTable}</tbody>
			</table>
		</div>
	);
}

export default BingoBoard;
