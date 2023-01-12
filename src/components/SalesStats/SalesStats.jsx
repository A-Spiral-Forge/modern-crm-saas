import React from 'react';

import './SalesStats.css';

export default class SalesStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: [
                {
                    title: 'Active deals',
                    unit: '$',
                    value: 151800,
                    lastMonth: 220000,
                    change: 2.5,
                    up: true,
                },
                {
                    title: 'Revenue this month',
                    unit: '$',
                    value: 340800,
                    lastMonth: 220000,
                    change: 2.5,
                    up: true,
                },
                {
                    title: 'Deals created',
                    unit: '',
                    value: 894,
                    lastMonth: 850,
                    change: 2.5,
                    up: true,
                },
                {
                    title: 'Deals closing this month',
                    unit: '',
                    value: 556,
                    lastMonth: 725,
                    change: 2.5,
                    up: false,
                },
            ]
        }
    }

    render() {
        return (
            <div className="sales-stats">
                {this.state.stats.map((stat, index) => {
                    return (
                        <div className="sales-stats__item" key={index}>
                            <div className="sales-stats__item__title">{stat.title}</div>
                            <div className="sales-stats__item__numbers">
                                <span className='sales-stats__item__numbers__value'>{stat.unit + stat.value}</span>
                                <span className={'sales-stats__item__numbers__change ' + (stat.up ? 'up' : 'down')}>
                                    <i className={'fa ' + (stat.up ? 'fa-arrow-up' : 'fa-arrow-down')} aria-hidden="true"></i>
                                    {stat.change}%
                                </span>
                            </div>
                            <div className='sales-stats__item_vs'>
                                <span className='sales-stats__item_vs__title'>vs Last Month: </span>
                                <span className='sales-stats__item_vs__numbers'>{stat.unit + stat.lastMonth}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}