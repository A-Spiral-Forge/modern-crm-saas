import React from 'react';

import './Main.css';
import '../ContentNavBar/ContentNavbar.css';

import SalesContent from '../SalesContent/SalesContent';
import Contacts from '../Contacts/Contacts';

export default class Main extends React.Component {

	renderContent(props) {
		if(props.activePage === 'Dashboard') {
			return <SalesContent />;
		}

		if(props.activePage === 'Contacts') {
			return <Contacts />;
		}
	}

	render() {
		return (
			<main className='main'>
				{this.renderContent(this.props)}
			</main>
		);
	}
}
