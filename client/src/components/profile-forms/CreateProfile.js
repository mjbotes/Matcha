import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import Modal from 'react-modal';

const CreateProfile = ({ createProfile, history }) => {
	const [formData, setFormData] = useState({
		firstname: '',
		middlename: '',
		surname: '',
		dob: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: ''
	});

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)'
		}
	};

	const [displaySocialInputs, toggleSocialInputs] = useState(false);

	const [displayUploadPic, toggleUploadPic] = useState(false);

	const { firstname, middlename, surname, dob } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		createProfile(formData, history);
	};

	return (
		<Fragment>
			<h1 className='large text-primary'>Create Your Profile</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Let's get some information to make your
				profile stand out
			</p>
			<button
				className='btn btn-primary'
				onClick={() => {
					toggleUploadPic(!displayUploadPic);
				}}
			>
				Upload Picture
			</button>
			<Modal isOpen={displayUploadPic} style={customStyles}>
				USE WEBCAM OR UPLOAD
				<button
					className='btn btn-primary'
					onClick={() => {
						toggleUploadPic(!displayUploadPic);
					}}
				>
					Done
				</button>
			</Modal>
			<small>* = required field</small>
			<form className='form' onSubmit={e => onSubmit(e)}>
				<input type='submit' className='btn btn-primary my-1' />
				<Link to='/dashboard'>Go Back</Link>
			</form>
		</Fragment>
	);
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
