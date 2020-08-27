import classNames from 'classnames';
import React from 'react';
import '../assets/css/square.scss';

function Square(props) {
	const { line, active, setActive, children } = props;

	return (
		<td
			className={classNames('square', { active })}
			onClick={() => setActive(!active)}
		>
			{line}
			{children}
		</td>
	);
}

export default Square;
