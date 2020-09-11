import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/css/app.scss';
import { loadBoard } from '../redux/bingo-actions';
import BingoBoard from './BingoBoard';
import Controls from './Controls';

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

				<footer>
					<a href="https://redd.it/ighswa">Original post</a> by /u/five_cacti
					|&nbsp;
					<a href="https://github.com/DaCurse/forsen-bingo">GitHub</a>
				</footer>
			</div>
		);
	}

	return <div className="loading">Loading</div>;
}

const mapStateToProps = (state) => ({
	squares: state,
});

const mapDispatchToProps = (dispatch) => ({
	loadBoard: () => dispatch(loadBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
