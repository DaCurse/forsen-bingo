import React, { useEffect } from 'react';
import forsenE from '../assets/img/forsenE.webp';
import Square from './Square';

function FreeSpace(props) {
	const { active, setActive } = props;

	// Free space is by default active
	useEffect(() => {
		setActive(true);
	}, []);

	return (
		// Make sure Free Space cannot be de-activated
		<Square active={active} setActive={setActive.bind(null, true)}>
			GFMB
			<br />
			<img src={forsenE} width="28" height="28" alt="forsenE" />
			<br />
			(Free Space)
		</Square>
	);
}

export default FreeSpace;
