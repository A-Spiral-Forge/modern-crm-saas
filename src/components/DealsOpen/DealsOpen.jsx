import React from 'react';

import './DealsOpen.css';

export default class DealsOpen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deals: [
				{
					closingDate: '18 Jan 2021',
					title: 'Web development deal with Jane',
					value: 40000,
					profilePic: '/images/user-image-big.png',
					dealerName: 'Jane mayer',
					status: 'Contract sent',
				},
				{
					closingDate: '18 Jan 2021',
					title: 'Web development deal with Jane',
					value: 40000,
					profilePic: '/images/user-image-big.png',
					dealerName: 'Jane mayer',
					status: 'Contract sent',
				},
				{
					closingDate: '18 Jan 2021',
					title: 'Web development deal with Jane',
					value: 40000,
					profilePic: '/images/user-image-big.png',
					dealerName: 'Jane mayer',
					status: 'Contract sent',
				},
				{
					closingDate: '18 Jan 2021',
					title: 'Web development deal with Jane',
					value: 40000,
					profilePic: '/images/user-image-big.png',
					dealerName: 'Jane mayer',
					status: 'Contract sent',
				},
				{
					closingDate: '18 Jan 2021',
					title: 'Web development deal with Jane',
					value: 40000,
					profilePic: '/images/user-image-big.png',
					dealerName: 'Jane mayer',
					status: 'Contract sent',
				},
			],
		};
	}

	render() {
		return (
			<div className='deals-open'>
				<div className='deals-open--header'>
					<p>Deals Open</p>
					<a href='/'>
						View More
						<i className='fas fa-chevron-right'></i>
					</a>
				</div>
				<div className='deals-open--body'>
					{this.state.deals.map((deal, index) => {
						return (
							<div className='deal' key={index}>
								<div className='deal--top'>
									<div className='closing-date'>
										Closing date:
										<span className='deal--top closing-date--value'>
											{deal.closingDate}
										</span>
									</div>
									<div className='deal-value'>
										${deal.value}
									</div>
								</div>
								<div className='deal--bottom'>
									<div className='deal-details--text'>
										<div className='deal-details--title'>
											{deal.title}
										</div>
										<div className='deal-details--dealer'>
											<img
												src={
													process.env.PUBLIC_URL +
													deal.profilePic
												}
												alt='User'
												className='deal-details--dealer-pic'
											/>
											<div className='deal-details--dealer-name'>
												{deal.dealerName}
											</div>
										</div>
									</div>
									<div className='deal-details--status'>
										<span
											className={
												'deal-details--status-value ' +
												deal.status
													.toLowerCase()
													.split(' ')
													.join('-')
											}
										>
											{deal.status}
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
