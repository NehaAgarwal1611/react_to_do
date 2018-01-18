import React from 'react';
import Header from '../components/header';
import ToDo from '../components/to_do';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<ToDo />
			</div>
		);
	}
}