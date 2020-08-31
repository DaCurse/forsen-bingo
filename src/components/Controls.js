import React from 'react';
import '../assets/css/controls.scss';
import { deleteGameState } from '../services/storage-service';

function Controls() {
	function handleDeleteClick() {
		const result = confirm('Are you sure you want to delete the current save?');
		if (result) {
			deleteGameState();
		}
	}

	return (
		<div className="controls">
			<button>Clear</button>
			<button>Reset</button>
			<button>Save</button>
			<button onClick={handleDeleteClick}>Delete Save</button>
			<label>
				<input type="checkbox" /> Save automatically
			</label>
		</div>
	);
}

export default Controls;
