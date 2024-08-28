import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './CrisisBanner.css';
import { ReactComponent as Info } from '../utilities/icons/info.svg';
import { ReactComponent as RightArrow } from '../utilities/icons/arrow-right.svg';
import { ReactComponent as Remove } from '../utilities/icons/remove.svg';
import HyButton from '../utilities/HyButton';
import { useTranslation } from 'react-i18next';

const linkHasAllThePropertiesRequired = (link) =>
    link && link.href && link.label;

const CrisisBanner = ({
                          heading,
                          link = { href: '', label: '' },
                          children
                      }) => {
    const { t } = useTranslation();
    const ref = useRef();

    const hide = () => {
        if (ref.current) {
            ref.current.remove();
        }
    };

    return (
        <div ref={ref} className="crisis-banner-container" role="banner">
            <div className="crisis-banner">
                <div className="crisis-banner-warning">
                    <Info />
                </div>
                <div className="crisis-banner-content">
                    <div className="crisis-banner-heading">
                        {heading}
                    </div>
                    <div className="crisis-banner-explanation">
                        {children}
                    </div>
                </div>
                <div className="crisis-banner-trailer">
                    {linkHasAllThePropertiesRequired && <div className="crisis-banner-follow-link">
                        <a href={link.href} target="_blank">
                            {link.label}
                            <span aria-hidden>
                <RightArrow />
              </span>
                        </a>
                    </div>}
                </div>
            </div>
            <div className="crisis-banner-close">
                <div className="crisis-banner-close-container">
                    <HyButton
                        variant="secondary"
                        mini
                        rightIcon={<Remove />}
                        onClick={hide}>
                        {t('close')}
                    </HyButton>
                </div>
            </div>
        </div>
    );
};

CrisisBanner.propTypes = {
    heading: PropTypes.string,
    link: PropTypes.shape({
        href: PropTypes.string,
        label: PropTypes.string
    }),
    children: PropTypes.node,
};

export default CrisisBanner;
