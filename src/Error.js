import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <p>
        {error.message}
      </p>
    </div>
  );
};

Error.propTypes = {
};

export default Error;
