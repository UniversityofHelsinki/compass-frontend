import React from 'react';
import PropTypes from 'prop-types';
import './BackButton.css';
import { ReactComponent as BackArrow } from './icons/arrow-left.svg';

const BackButton = ({
  labels: {
    primary: primaryLabel,
    secondary: secondaryLabel
  } = { 
    primary: '', 
    secondary: '' 
  },
  href
}) => {

  return (
    <a className="back-button" href={href}>
      <div className="back-button-icon" aria-hidden={true}>
        <BackArrow />
      </div>
      <div className="back-button-margin-block"></div>
      <div className="back-button-label">
        <div className="back-button-label-primary">
          <span>{primaryLabel}</span>
        </div>
        <div className="back-button-label-secondary">
          <span>{secondaryLabel}</span>
        </div>
      </div>
    </a>
  );
};

export const propTypes = {
  labels: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string
  }),
  href: PropTypes.string
};

BackButton.propTypes = propTypes;

export default BackButton;
