import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const LaunchDetailModal = ({ open, handleClose, currentLaunch = {} }) => {
  const { mission_name } = currentLaunch;
  return <Modal isOpen={open}>
    <div className="launch-detail-modal">
      <h2>{mission_name}</h2>

    </div>
  </Modal>
}

LaunchDetailModal.PropTypes = {
  handleClose: PropTypes.func,

}

export default LaunchDetailModal;