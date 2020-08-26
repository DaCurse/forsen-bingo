import React, { useEffect, useState } from 'react';
import '../assets/css/bingo-board.scss';
import FreeSpace from './FreeSpace';
import Square from './Square';

const FREE_SQUARE = '{free}';

function BingoBoard(props) {
	const { title, squares } = props;
	const [squareState, setSquareState] = useState(
		Array(squares.length).fill(false),
	);
	const [winner, setWinner] = useState(false);
	const tableSize = Math.ceil(Math.sqrt(squares.length));

	useEffect(() => {
		const rows = partition(squareState, tableSize);
		const fullRow = rows.some((row) => row.every((col) => col === true));

		let fullDiag = true,
			fullAntiDiag = true;
		for (let i = 0; i < rows.length; i++) {
			if (!rows[i][i]) {
				fullDiag = false;
			}
			if (!rows[i][tableSize - i - 1]) {
				fullAntiDiag = false;
			}
		}

		setWinner(fullRow || fullDiag || fullAntiDiag);
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
