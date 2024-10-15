import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker, { getDefaultLocale, registerLocale, setDefaultLocale } from 'react-datepicker';
import { fi }from 'date-fns/locale/fi';
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css';

registerLocale('fi', fi);
setDefaultLocale('fi');

const DatePicker = ({ 
  date, 
  onChange,
  ...rest
}) => {

  const handleChange = (date) => {
    onChange(date.toISOString());
  };

  return (
    <div className="date-picker">
      <ReactDatePicker 
        dateFormat="d.M.yyyy"
        locale="fi"
        selected={new Date(date)} 
        onChange={handleChange}
        { ...rest }
      />
    </div>
  );
};

DatePicker.propTypes = {
  date: PropTypes.string,
  onChange: PropTypes.func
};

export default DatePicker;
