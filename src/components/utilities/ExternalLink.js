import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ExternalLinkIcon } from './icons/arrow-offsite.svg';
import Colors from './HyColors.js';
import './ExternalLink.css';
import {useTranslation} from "react-i18next";

const ExternalLink = ({ to, label, fill, height = 12, width = 12 }) => {
    const {t} = useTranslation();
    return (
        <>
            <a href={to} target="_blank" rel="noreferrer noopener" style={{paddingRight: '8px'}}>
                {label}
                <div className="screenreader-only"> {t('opens_in_new_tab')} </div>
            </a>
            <ExternalLinkIcon className="footer-external-link-icon" height={height} width={width} fill={fill || Colors.white} />
        </>
    );
};

ExternalLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
};

export default ExternalLink;
