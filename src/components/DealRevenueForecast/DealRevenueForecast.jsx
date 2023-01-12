import React from 'react';

import './DealRevenueForecast.css';

export default class DealRevenueForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyGoals: {
                name: 'February Goals',
                value: 300000,
                progress: 25
            },
            teamGoals: [
                {
                    name: 'Marketing',
                    value: 29000,
                    max: 150000,
                    progress: 19.33
                },
                {
                    name: 'Sales',
                    value: 120060,
                    max: 150000,
                    progress: 80.04
                },
                {
                    name: 'Digital Marketing',
                    value: 139100,
                    max: 150000,
                    progress: 92.73
                }
            ]
        };
    }

    render() {
        return (
            <div className='deal-revenue-forecast'>
                <div className="deal-revenue-forecast--header">
                    <p>Deal Revenue Forecast</p>
                    <a href='/'>View More 
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
                <div className="deal-revenue-forecast--body">
                    <div className="deal-revenue-forecast--body--item company-goals">
                        <p className='heading'>Company Goals</p>
                        <div className='data'>
                            <div role="progressbar" className='company-goals' aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{'--value':25}}>
                                <span className='name'>February Goals</span>
                                <span className='value'>$300000</span>
                            </div>
                        </div>
                    </div>
                    <div className="deal-revenue-forecast--body--item team-goals">
                        <p className='heading'>Team Goals</p>
                        <div className="data">
                            {
                                this.state.teamGoals.map((item, index) => {
                                    return (
                                        <div className='data--item' key={index}>
                                            <div className='text'>
                                                <span className='name'>{item.name}</span>
                                                <span className='value'>
                                                    <span className='value--1'>${item.value}/</span>
                                                    <span className='value--2'>${item.max}</span>
                                                </span>
                                            </div>
                                            <div className='progress range-bar'>
                                                <div className='range-bar--value' style={{'--value':`${item.progress}%`}}></div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}