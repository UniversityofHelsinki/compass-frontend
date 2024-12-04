import './TopBar.css';
import BackButton, { propTypes as BackButtonPropTypes } from './BackButton';
import * as React from 'react';
import PropTypes from 'prop-types';

const TopBar = ({ showBackBtn = false, backBtnLabels, backBtnHref = '', heading, children }) => {
    return (
        <div className="top-bar">
            <div className="top-bar-back-btn">
                {showBackBtn && <BackButton labels={backBtnLabels} href={backBtnHref} />}
            </div>
            <div className="top-bar-heading">
                <h2>{heading}</h2>
            </div>
            <div className="top-bar-children">{children}</div>
        </div>
    );
};

export const propTypes = {
    children: PropTypes.node,
    showBackBtn: PropTypes.bool,
    backBtnLabels: BackButtonPropTypes.labels,
    backButtonHref: BackButtonPropTypes.href,
};

TopBar.propTypes = propTypes;

export default TopBar;
