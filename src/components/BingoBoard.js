import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../assets/css/bingo-board.scss';
import { checkIntersections } from '../util/check-intersections';
import { chunk } from '../util/chunk';
import FreeSpace from './FreeSpace';
import Square from './Square';

function BingoBoard(props) {
	const { squares } = props;
	const [winner, setWinner] = useState(false);

	// Bingo board should optimally be a square
	const tableSize = Math.ceil(Math.sqrt(squares.length));

	// Win checking alogrithm, checks if either all rows, columns and both
	// diagonals have only active squares
	useEffect(() => {
		// Util coord arrays
		const indexes = [...Array(tableSize).keys()];
		const indexesReverse = indexes.slice().reverse();
		// Partially applying current board stats to reduce repetition
		const checkBoardIntersections = checkIntersections.bind(
			null,
			squares,
			tableSize,
		);

		let result = false;
		// Check rows and columns
		for (let i = 0; i < tableSize; i++) {
			result =
				result ||
				checkBoardIntersections(indexes, Array(tableSize).fill(i)) ||
				checkBoardIntersections(Array(tableSize).fill(i), indexes);
		}
		// Check both diagonals
		result =
			result ||
			checkBoardIntersections(indexes, indexes) ||
			checkBoardIntersections(indexesReverse, indexes);

		setWinner(result);
	}, [squares]);

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
