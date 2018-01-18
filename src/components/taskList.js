import React from 'react';

export default class TaskList extends React.Component {
	constructor(props) {
		super(props);
		this.createItem = this.createItem.bind(this);
		this.delete = this.delete.bind(this);
	}

	createItem(item) {
		return (
			<li key={item.key}>
				<p>{item.text}</p>
				<button type='button' className='clearTask' onClick={() => {this.delete(item.key)}}>X</button>
			</li>
		)
	}

	delete(key) {
		this.props.clearItem(key);
	}

	render() {
		var taskList = this.props.entries;
		var listItems = taskList.map(this.createItem);

		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}