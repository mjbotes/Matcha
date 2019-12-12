import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}
	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>We promise you love</h1>
					<p className='lead'>
						Find your perfect match <i className='fas fa-kiss-wink-heart'></i>{' '}
						with our one of a kind mathching algorithm. Are you ready to find
						the love of your life?
					</p>
					<div className='buttons'>
						<Link to='/register' className='btn btn-primary'>
							Sign up
						</Link>
						<Link to='/login' className='btn'>
							login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
