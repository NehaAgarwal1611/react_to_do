import React from 'react';
import TaskList from '../components/taskList';

export default class ToDo extends React.Component {
	constructor() {
		super();
		this.state = {
			entries: []
		}
		this.addTask = this.addTask.bind(this);
		this.clearItem = this.clearItem.bind(this);
	}

	addTask(e) {
		let taskArray = this.state.entries;

		if(this._inputValue.value !== '') {
			taskArray.push({
				text: this._inputValue.value,
				key: Date.now()
			})
		}

		this.setState({
			entries: taskArray
		})

		this._inputValue.value = '';

		e.preventDefault();
	}

	clearItem(key) {
		var newList = this.state.entries.filter(function(item){
			return (item.key !== key);
		})

		this.setState({
			entries: newList
		})
	}

	render() {
		return (
			<div className = 'to-do'>
				<div className = 'newTask'>
					<form onSubmit={this.addTask}>
						<input type='text' placeholder='New' ref={(el) => {this._inputValue = el;}} />
						<button type='submit'>+</button>
					</form>
				</div>
				<TaskList entries={this.state.entries} clearItem={this.clearItem} />
			</div>
		);
	}
}