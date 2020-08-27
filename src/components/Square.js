import classNames from 'classnames';
import React from 'react';
import '../assets/css/square.scss';
import { activateSquare, deactivateSquare } from '../services/api-service';

function Square(props) {
	const { line, id, freeSquare, active, setActive, children } = props;

	function handleSquareClick() {
		if (freeSquare) return;

		if (active) {
			deactivateSquare(id);
		} else {
			activateSquare(id);
		}
		setActive(!active);
	}

	return (
		<td
			className={classNames('square', { active })}
			onClick={handleSquareClick}
		>
			{line}
			{children}
		</td>
	);
}

export default Square;
