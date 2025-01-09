import React from 'react';
import PropTypes from 'prop-types';
import './Instructions.css';
import { useTranslation } from 'react-i18next';
import TopBar from '../utilities/TopBar';

const Instructions = () => {
    const { t } = useTranslation();
    return (
        <div className="instructions">
            <TopBar heading={t('instructions_heading')} />
            <div className="instructions-content responsive-margins">
                <p>no content yet</p>
            </div>
        </div>
    );
};

Instructions.propTypes = {};

export default Instructions;
