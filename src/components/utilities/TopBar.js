import './TopBar.css';
import BackButton, { propTypes as BackButtonPropTypes } from './BackButton';
import * as React from 'react';
import PropTypes from 'prop-types';
import LogoImage from '../logo/LogoImage';

const TopBar = ({ showBackBtn = false, backBtnLabels, backBtnHref = '', heading, children }) => {
    return (
        <>
            <div className="top-bar">
                <div className="top-bar-left">
                    <div className="top-bar-logo">
                        <LogoImage />
                    </div>
                </div>
                <div className="top-bar-heading">
                    <h2>{heading}</h2>
                </div>
                <div className="top-bar-children">{children}</div>
            </div>
            {showBackBtn && <div className="my-1"></div>}
            <div className="top-bar-back-btn">
                {showBackBtn && <BackButton labels={backBtnLabels} href={backBtnHref} />}
            </div>
        </>
    );
};

export const propTypes = {
    children: PropTypes.node,
    showBackBtn: PropTypes.bool,
    backBtnLabels: BackButtonPropTypes.labels,
    heading: PropTypes.string,
};

TopBar.propTypes = propTypes;

export default TopBar;
