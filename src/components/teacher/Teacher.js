import React from 'react';
import PropTypes from 'prop-types';
import './Teacher.css';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Teacher = () => {
  const { user: { isTeacher, eppn } } = useAuth();

  if (!isTeacher) {
    throw new Error(`Permission denied for user ${eppn}. User is not a teacher.`);
  }

  return (
    <>
      <Outlet />
    </>
  );
};

Teacher.propTypes = {
};

export default Teacher;
