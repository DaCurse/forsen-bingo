import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/css/app.scss';
import { loadBoard } from '../redux/bingo-actions';
import BingoBoard from './BingoBoard';
import Controls from './Controls';
import Footer from './Footer';

function App(props) {
	const { squares, loadBoard } = props;

	useEffect(() => {
		if (!squares) {
			loadBoard();
		}
	}, []);

	if (squares) {
		return (
			<div className="app">
				<BingoBoard />
				<Controls />
				<Footer />
			</div>
		);
	}

	return <div className="loading">Loading</div>;
}

const mapStateToProps = (state) => ({
	squares: state.squares,
});

const mapDispatchToProps = (dispatch) => ({
	loadBoard: () => dispatch(loadBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
