import React from 'react';
import { Nav } from 'react-bootstrap';

export default class ContactsNavbar extends React.Component {
    render() {
        return (
            <Nav className='content-navbar'>
                <Nav.Item className='content-navbar--left'>
                    <span className="mainnav-item active">Leads</span>
                    <span className="mainnav-item">Contacts</span>
                    <span className="mainnav-item">Company</span>
                    <span className="mainnav-item">Lead capture</span>
                </Nav.Item>
                <Nav.Item className='content-navbar--right'>
                </Nav.Item>
            </Nav>
        )
    }
}