import React from 'react';
import forsenE from '../assets/img/forsenE.webp';
import Square from './Square';

function FreeSpace(props) {
	const { id } = props;

	return (
		<Square id={id}>
			GFMB
			<br />
			<img src={forsenE} width="28" height="28" alt="forsenE" />
			<br />
			(Free Space)
		</Square>
	);
}

export default FreeSpace;
