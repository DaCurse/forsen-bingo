import classNames from 'classnames';
import React from 'react';
import '../assets/css/square.scss';

function Square(props) {
	const { text, active, setActive, children } = props;

	return (
		<td
			className={classNames('square', { active })}
			onClick={() => setActive(!active)}
		>
			{text}
			{children}
		</td>
	);
}

export default Square;
