import React from 'react';
import PropTypes from 'prop-types';

// This component serves to render a bold label and a value, separated by a colon character
const DisplayField = ({ label, value }) => <p style={{ padding: '4px 0' }}><strong>{label}:</strong>&nbsp;{value}</p>

DisplayField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default DisplayField;