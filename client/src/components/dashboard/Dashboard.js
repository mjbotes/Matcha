import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/spinner';
import Experience from './Experience';
import DashboardActions from './DashboardActions';
import Education from './Education';

const Dashboard = ({
	getCurrentProfile,
	deleteAccount,
	auth: { user },
	profile: { profile, loading }
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return loading && profile === null ? (
		<Spinner />
	) : (
		<Fragment>
			<h1 className='large text-primary'>Dashboard</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Welcome {user && user.name}
			</p>
			{profile !== null ? (
				<div className='dboard-grid'>
					<Link to='/edit-profile'>
						<div className='bg-primary upd center p-1'>
							<h2 className='x-large'>
								<i className='fas fa-user'></i>
								<br />
								Update Profile
							</h2>
							<p className='lead'>
								Update your profile so that your potential matches can know more
								about you.
							</p>
						</div>
					</Link>
					<Link to='/match-finder'>
						<div className='bg-dark lik center p-1'>
							<h2 className='x-large'>
								<i className='fas fa-heart'></i>
								<br />
								Start Liking
							</h2>
							<p className='lead'>Start liking to find a match</p>
						</div>
					</Link>
				</div>
			) : (
				<Fragment>
					<Link to='/create-profile'>
						<div className='bg-primary cre center p-1'>
							<h2 className='x-large'>
								<i className='fas fa-user'></i>
								<br />
								Create Profile
							</h2>
							<p className='lead m-2'>
								Create your profile so that your potential matches can know more
								about you and to start likeing
							</p>
						</div>
					</Link>
				</Fragment>
			)}
		</Fragment>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
	Dashboard
);
