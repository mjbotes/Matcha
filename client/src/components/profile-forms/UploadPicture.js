import React, { Fragment } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const UploadPicture = ({ isOpen }) => {
	return <Modal isOpen={isOpen}>USE WEBCAM OR UPLOAD</Modal>;
};

UploadPicture.ProtoTypes = {
	isOpen: PropTypes.bool.isRequired
};

export default UploadPicture;
