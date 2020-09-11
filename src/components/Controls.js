import React from 'react';
import { connect } from 'react-redux';
import '../assets/css/controls.scss';
import {
	clearBoard,
	loadBoard,
	saveBoard,
	setAutoSave,
} from '../redux/bingo-actions';
import { deleteGameState } from '../services/storage-service';
import { confirmAction } from '../util/confirm-action';

function Controls(props) {
	const { autoSave, clear, reset, save, setAutoSave } = props;

	return (
		<div className="controls">
			<button
				onClick={() =>
					confirmAction('Are you sure you want to clear the board?', clear)
				}
			>
				Clear
			</button>

			<button
				onClick={() =>
					confirmAction(
						'Are you sure you want to reset the board? (This will clear the board and shuffle the options)',
						reset,
					)
				}
			>
				Reset
			</button>

			<button onClick={save}>Save</button>

			<button
				onClick={() =>
					confirmAction(
						'Are you sure you want to delete the current save?',
						deleteGameState,
					)
				}
			>
				Delete Save
			</button>

			<label>
				<input
					type="checkbox"
					checked={autoSave}
					onChange={(e) => {
						setAutoSave(e.target.checked);
						save();
					}}
				/>
				&nbsp;Save automatically
			</label>
		</div>
	);
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
	clear: () => dispatch(clearBoard()),
	reset: () => dispatch(loadBoard()),
	save: () => dispatch(saveBoard()),
	setAutoSave: (value) => dispatch(setAutoSave(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
