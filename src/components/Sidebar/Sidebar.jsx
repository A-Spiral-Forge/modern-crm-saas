/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Sidebar.css';

export default class Sidebar extends React.Component {

    handleActivePageChange = (event) => {
        const el = event.target.closest('.sidenav-link');
        
        if(!el) {
            return;
        }

        document.querySelector('li.sidenav-item.active').classList.remove('active');
        const li_el = el.closest('.sidenav-item');
        li_el.classList.add('active');
        this.props.handleActivePageChange(li_el.dataset.page);
    }
    
    render() {
        return (
            <div
                id="sidenav-1"
                className="sidenav"
                data-mdb-color="dark"
                role="navigation"
                data-mdb-hidden="false"
                data-mdb-accordion="true"
            >
                <ul className="sidenav-menu" onClick={this.handleActivePageChange}>
                    <div className="sidenav-upper">
                        <li className="sidenav-item active" data-page="Dashboard">
                            <a className="sidenav-link">
                                <i className="fa-solid fa-gauge-high"></i>
                            </a>
                        </li>
                        <li className="sidenav-item" data-page="Contacts">
                            <a className="sidenav-link">
                                <i className="fa-duotone fa-address-book"></i>
                            </a>
                        </li>
                        <li className="sidenav-item" data-page="Notifications">
                            <a className="sidenav-link">
                                <i className="fa-duotone fa-bullhorn"></i>
                            </a>
                        </li>
                        <li className="sidenav-item" data-page="Contacts">
                            <a className="sidenav-link">
                                <i className="fa-duotone fa-store"></i>
                            </a>
                        </li>
                        <li className="sidenav-item" data-page="Contacts">
                            <a className="sidenav-link">
                                <i className="fa-duotone fa-briefcase"></i>
                            </a>
                        </li>
                        <li className="sidenav-item" data-page="Contacts">
                            <a className="sidenav-link">
                                <i className="fa-duotone fa-file-chart-column"></i>
                            </a>
                        </li>
                    </div>
                    <div className="sidenav-down">
                        <li className="sidenav-item" data-page="Help">
                            <a className="sidenav-link">
                                <i className="fa-solid fa-question-circle"></i>
                            </a>
                        </li>
                        <li className="sidenav-item" data-page="Settings">
                            <a className="sidenav-link">
                                <i className="fa-solid fa-cog"></i>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}