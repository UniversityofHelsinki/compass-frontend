import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom'
import './Student.css';

const Student = () => {
  return (
    <>
      <p>oppilas</p>
      <Outlet />
    </>
  );
};

Student.propTypes = {
};

export default Student;
