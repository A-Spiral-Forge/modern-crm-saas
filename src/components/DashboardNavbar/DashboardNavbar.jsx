import React from 'react';
import { Nav } from 'react-bootstrap';

export default class DashboardNavbar extends React.Component {
    render() {
        return (
            <Nav className='content-navbar'>
                <Nav.Item className='content-navbar--left'>
                    <span className="mainnav-item">Easther Home</span>
                    <span className="mainnav-item active">Sales</span>
                </Nav.Item>
                <Nav.Item className='content-navbar--right'>
                    <span className="mainnav-right-item">
                        <i className='fa-regular fa-gear'></i>
                        Manage dashboards
                    </span>
                </Nav.Item>
            </Nav>
        )
    }
}