import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Outlet, useNavigate } from 'react-router-dom'
import './Student.css';

const Student = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

Student.propTypes = {
};

export default Student;
