import React from 'react';
import PropTypes from 'prop-types';
import './HyMenuLabel.css';
import { ReactComponent as CaretDown } from './icons/caret-down.svg';
import { ReactComponent as CaretUp } from './icons/caret-up.svg';

const HyMenuLabel = ({ Icon, caretUp, children }) => {
    return (
        <div className="hy-menu-label">
            <div className="hy-menu-label-icon">
                <Icon />
            </div>
            <span className="hy-menu-label-content">
        {children}
      </span>
            <div className="hy-menu-label-caret">
                {caretUp ? <CaretUp /> : <CaretDown />}
            </div>
        </div>
    );
};

HyMenuLabel.propTypes = {
    Icon: PropTypes.object,
    caretUp: PropTypes.bool,
    children: PropTypes.node
};

export default HyMenuLabel;
