import React from 'react';
import {Nav, NavItem, InputGroup, Form, Button, NavDropdown} from 'react-bootstrap';

import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className='main-header'>
                <Nav className='main-navbar'>
                    <NavItem>
                        <Nav.Link className='nav-links'>{this.props.title}</Nav.Link>
                    </NavItem>
                    <Nav.Item>
                        <Form className='search-form'>
                            <InputGroup className='search-bar-group'>
                                <InputGroup.Text id='basic-addon1' className='search-bar-icon fa-solid fa-search'>
                                </InputGroup.Text>
                                <Form.Control
                                    type="search"
                                    placeholder="Search lead, contact, and more"
                                    className='search-bar-input'
                                />
                            </InputGroup>
                        </Form>
                        <Button className='navbar-add-btn' variant='outline-secondary'>
                            <i className='fa-solid fa-plus search-icon'></i>
                        </Button>
                        <div className="navbar-icons">
                            <i className="far fa-message-lines"></i>
                            <i className="fa-light fa-bell"></i>
                            <i className="fa-light fa-calendar"></i>
                        </div>
                        <NavDropdown title={
                            <div className="profile">
                                <img
                                    src={process.env.PUBLIC_URL + "/images/user-image-big.png"}
                                    className="rounded-circle"
                                    height="35"
                                    alt=""
                                    loading="lazy"
                                />
                                <div className="profile-text">
                                    <span className="name"> John Kuy </span>
                                    <span className="prof"> CEO, Superadmin </span>
                                </div>
                            </div>
                        } id="basic-nav-dropdown" className='profile-dropdown'>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                </Nav>
            </header>
        );
    }
};