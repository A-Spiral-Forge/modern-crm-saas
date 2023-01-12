import React from 'react';

import './Contacts.css';

import ContactsNavbar from '../ContactsNavbar/ContactsNavbar';

export default class Contacts extends React.Component {
    render() {
        return (
            <div className="contacts-content">
                <ContactsNavbar />
            </div>
        );
    }
}