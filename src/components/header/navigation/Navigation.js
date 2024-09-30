import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { useTranslation } from 'react-i18next';

const NavigationLink = ({ to }) => {
  const { t } = useTranslation();

  return (
      <div className="navigation-link">
        <NavLink to={to}>{t(`navigation_${to}`)}</NavLink>
        <div className="mt-1"></div>
        <div className="navigation-link-underline"></div>
      </div>
  );
};

const Navigation = () => {

  return (
    <nav className="navigation">
      <ol>
        {['teacher', 'student'].map((link, i, links) => 
          <li key={link}>
            <NavigationLink to={link} />
          </li>
        )}
      </ol>
    </nav>
  );
};

Navigation.propTypes = {
};

export default Navigation;
