import React, { useEffect } from 'react';
import forsenE from '../assets/img/forsenE.webp';
import Square from './Square';

function FreeSpace(props) {
	// Free space is by default active
	const { active, setActive } = props;

	useEffect(() => {
		setActive(true);
	}, []);

	return (
		<Square active={active} setActive={setActive.bind(null, true)}>
			GFMB
			<br />
			<img src={forsenE} width="28" height="28" />
			<br />
			(Free Space)
		</Square>
	);
}

export default FreeSpace;
