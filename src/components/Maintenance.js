import React from 'react';
import '../assets/css/maintenance.scss';
import forsenGa from '../assets/img/forsenGa.webp';
import wrench from '../assets/img/wrench.svg';
import Footer from './Footer';

function Maintenance() {
	return (
		<div className="maintenance">
			<h1>Website undergoing maintenance...</h1>
			<img src={forsenGa} alt="forsenGa" />
			<img src={wrench} alt="Wrench Emoji" width="84" height="84" />
			<Footer />
		</div>
	);
}

export default Maintenance;
