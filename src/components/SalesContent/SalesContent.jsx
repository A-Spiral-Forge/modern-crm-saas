import React from 'react';

import './SalesContent.css';

import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import SalesHeader from '../SalesHeader/SalesHeader';
import SalesStats from '../SalesStats/SalesStats';
import DealRevenueForecast from '../DealRevenueForecast/DealRevenueForecast';
import DealsOpen from '../DealsOpen/DealsOpen';

export default class SalesContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastEditedDateSales: '2020-01-01',
        };
    }

    render() {
        return (
            <div className='sales-content'>
                <DashboardNavbar />
                <SalesHeader lastEditedDate={this.state.lastEditedDateSales} />
                <SalesStats />
                <div className="deals-stats">
                    <DealRevenueForecast />
                    <DealsOpen />
                </div>
            </div>
        );
    }
}