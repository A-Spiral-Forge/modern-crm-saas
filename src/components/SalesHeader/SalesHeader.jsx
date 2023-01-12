import React from 'react';
import { Button } from 'react-bootstrap';

import './SalesHeader.css';

export default class SalesHeader extends React.Component {

    render() {
        return (
            <header className='sales-header'>
                <div className='sales-header--left'>
                    <h3 className='sales-header--title'>Sales</h3>
                    <p className='sales-header--last_edited'>
                        last edited:
                        <span className='sales-header--last_edited_date'>
                            {this.props.lastEditedDate}
                        </span>
                    </p>
                </div>
                <div className='sales-header--right'>
                    <Button className='sales-header--button' variant='primary'>
                        <i className='sales-header--button_icon fa fa-plus'></i>
                        <span className='sales-header--button_text'>Add Widget</span>
                    </Button>
                    <Button className='sales-header--button' variant='outline-secondary'>
                        <i className='sales-header--button_icon fa-thin fa-pen'></i>
                        <span className='sales-header--button_text'>Edit Widget</span>
                    </Button>
                </div>
            </header>
        );
    }
}
