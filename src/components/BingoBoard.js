import React, { useEffect, useState } from 'react';
import '../assets/css/bingo-board.scss';
import FreeSpace from './FreeSpace';
import Square from './Square';

export const FREE_SQUARE = '{free}';

function BingoBoard(props) {
	const { title, squares } = props;
	const [squareState, setSquareState] = useState(
		Array(squares.length).fill(false),
	);
	const [winner, setWinner] = useState(false);
	const tableSize = Math.ceil(Math.sqrt(squares.length));

	// Make sure free space is centered after shuffle
	const freePos = squares.indexOf(FREE_SQUARE);
	const middle =
		tableSize * Math.floor(tableSize / 2) + Math.floor(tableSize / 2);
	[squares[middle], squares[freePos]] = [squares[freePos], squares[middle]]; // Best syntax ever

	// Very efficient win checking algorithm Kapp
	useEffect(() => {
		const rows = partition(squareState, tableSize);
		const fullRow = rows.some((row) => row.every((col) => col === true));

		let fullDiag = true,
			fullAntiDiag = true,
			fullCol = false;
		for (
			let i = 0;
			i < tableSize && (fullCol || fullDiag || fullAntiDiag);
			i++
		) {
			fullDiag = rows[i][i];
			fullAntiDiag = rows[i][tableSize - i - 1];

			for (let j = 0; j < tableSize; j++) {
				if (!rows[j][i]) {
					break;
				}
				if (j === tableSize - 1) fullCol = true;
			}
		}

		setWinner(fullRow || fullDiag || fullAntiDiag || fullCol);
	}, [squareState]);

	function setActiveFactory(idx) {
		return (state) => {
			const stateCopy = [...squareState];
			stateCopy[idx] = state;
			setSquareState(stateCopy);
		};
	}

	const squaresToRender = squares.map((square, idx) =>
		square === FREE_SQUARE ? (
			<FreeSpace
				active={squareState[idx]}
				setActive={setActiveFactory(idx)}
				key={idx}
			/>
		) : (
			<Square
				text={squares[idx]}
				active={squareState[idx]}
				setActive={setActiveFactory(idx)}
				key={idx}
			/>
		),
	);

	const squareTable = partition(
		squaresToRender,
		tableSize,
	).map((columns, idx) => <tr key={idx}>{columns}</tr>);

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

function partition(arr, size) {
	const temp = [];
	for (let i = 0; i < arr.length; i += size) {
		temp.push(arr.slice(i, i + size));
	}

	return temp;
}

export default BingoBoard;
