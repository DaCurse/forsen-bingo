import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import '../assets/css/square.scss';
import { activateSquare, deactivateSquare } from '../redux/bingo-actions';

function Square(props) {
	const { square, activate, deactivate, children } = props;

	function handleSquareClick() {
		if (square.freeSquare) return;

		if (square.active) {
			deactivate();
		} else {
			activate();
		}
	}

	return (
		<td
			className={classNames('square', { active: square.active })}
			onClick={handleSquareClick}
		>
			{square.line}
			{children}
		</td>
	);
}

const mapStateToProps = (state, ownProps) => ({
	square: state.squares.find((square) => square.id === ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	activate: () => dispatch(activateSquare(ownProps.id)),
	deactivate: () => dispatch(deactivateSquare(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
