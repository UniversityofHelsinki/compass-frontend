import React from 'react';
import PropTypes from 'prop-types';
import './ContactDetails.css';
import { useTranslation } from 'react-i18next';

const ContactDetails = () => {
    const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>
            {t('footer_hy')}
        </strong>
      </p>
      <p>
          {t('footer_hy_address_line_1')}
          <br />
          {t('footer_hy_address_line_2')}
      </p>
      <p>
          {t('footer_hy_phone_switchboard')}
      </p>
      <p>
          {t('footer_hy_maintenance')}
      </p>
    </>
  );
};

ContactDetails.propTypes = {
};

export default ContactDetails;
