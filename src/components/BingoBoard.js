import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../assets/css/bingo-board.scss';
import { chunk } from '../util/chunk';
import FreeSpace from './FreeSpace';
import Square from './Square';

function BingoBoard(props) {
	const { squares } = props;
	const [winner, setWinner] = useState(false);

	// Bingo board should optimally be a square
	const tableSize = Math.ceil(Math.sqrt(squares.length));

	// Very efficient win checking algorithm Kapp
	useEffect(() => {
		const rows = chunk(squares, tableSize);
		const fullRow = rows.some((row) => row.every((col) => col.active));
		const fullCol = rows
			.reduce(
				(counters, row) =>
					counters.map((counter, index) => counter + row[index].active),
				Array(tableSize).fill(0),
			)
			.some((counter) => counter === tableSize);

		let fullDiag = true,
			fullAntiDiag = true;
		for (let i = 0; i < tableSize; i++) {
			if (!rows[i][i].active) {
				fullDiag = false;
			}
			if (!rows[i][tableSize - i - 1].active) {
				fullAntiDiag = false;
			}
		}

		setWinner(fullRow || fullDiag || fullAntiDiag || fullCol);
	}, [squares]);

	// useEffect(() => saveGameState(squares, squareState), [squareState]);

	const squaresToRender = squares.map((square, index) =>
		square.freeSquare ? (
			<FreeSpace id={square.id} key={index} />
		) : (
			<Square id={square.id} key={index} />
		),
	);

	const squareTable = chunk(
		squaresToRender,
		tableSize,
	).map((columns, index) => <tr key={index}>{columns}</tr>);

	return (
		<div className="bingo-board">
			<h1 className="title">
				Forsen Mega Bingo
				{winner && <span className="winner">&nbsp;-&nbsp;Winner!</span>}
			</h1>
			<div className="date">Date: {new Date().toLocaleDateString()}</div>

			<table>
				<tbody>{squareTable}</tbody>
			</table>
		</div>
	);
}

const mapStateToProps = (state) => ({ squares: state.squares });

export default connect(mapStateToProps)(BingoBoard);
