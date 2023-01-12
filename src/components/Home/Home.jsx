import React from 'react';

import './Home.css';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePage: 'Dashboard',
		};
	}

	handleActivePageChange = (page) => {
		this.setState({
			...this.state,
			activePage: page,
		});
	}

	render() {
		return (
			<div>
				<Header title={this.state.activePage} />
				<Sidebar
					handleActivePageChange={this.handleActivePageChange}
					activePage={this.state.activePage}
				/>
				<div className='main-content'>
					<Main activePage={this.state.activePage} />
				</div>
			</div>
		);
	}
}
