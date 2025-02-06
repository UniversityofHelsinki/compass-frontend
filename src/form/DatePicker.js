import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { fi } from 'date-fns/locale/fi';
import { enGB } from 'date-fns/locale/en-GB';
import { sv } from 'date-fns/locale/sv';
import { et } from 'date-fns/locale/et';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

registerLocale('fi', fi);
registerLocale('en', enGB);
registerLocale('sv', sv);
registerLocale('ee', et);

const DatePicker = React.forwardRef(
    (
        {
            date,
            onChange,
            locale,
            'aria-errormessage': ariaErrorMessage,
            'aria-invalid': ariaInvalid,
            ...rest
        },
        ref,
    ) => {
        const [value, setValue] = useState(date);
        const [localeLanguage, setLocaleLanguage] = useState('fi');

        useEffect(() => {
            if (locale) {
                setLocaleLanguage(locale);
            }
        }, [locale]);

        if (ref.current) {
            if (ariaErrorMessage && ariaInvalid) {
                ref.current.input.setAttribute('aria-errormessage', ariaErrorMessage);
                ref.current.input.setAttribute('aria-invalid', ariaInvalid);
            } else {
                ref.current.input.removeAttribute('aria-errormessage');
                ref.current.input.removeAttribute('aria-invalid');
            }
        }

        const handleChange = (input, event) => {
            if (input) {
                input.setUTCHours(0, 0, 0, 0);
                onChange(input.toISOString(), event);
            } else {
                onChange(null, event);
            }
        };

        return (
            <div className="date-picker">
                <ReactDatePicker
                    ref={ref}
                    dateFormat="d.M.yyyy"
                    locale={localeLanguage}
                    preventOpenOnFocus={true}
                    selected={date}
                    onChange={handleChange}
                    {...rest}
                />
            </div>
        );
    },
);

DatePicker.propTypes = {
    date: PropTypes.object,
    onChange: PropTypes.func,
    locale: PropTypes.string,
};

export default DatePicker;
