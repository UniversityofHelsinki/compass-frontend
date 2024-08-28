import React from 'react';
import PropTypes from 'prop-types';
import './ConditionalCrisisBanner.css';
import CrisisBanner from './CrisisBanner';
import { useTranslation } from 'react-i18next';

const ConditionalCrisisBanner = () => {

    const { t } = useTranslation();

    const heading = 'crisis_banner_heading';
    const content = 'crisis_banner_content';
    const linkLocation = 'crisis_banner_link_location';
    const linkLabel = 'crisis_banner_link_label';

    const requiredFieldsArePresent =
        [heading, content, linkLocation, linkLabel].every(s => {
            return t(s) && s !== t(s)
        });

    if (requiredFieldsArePresent) {
        return (
            <CrisisBanner
                heading={t(heading)}
                link={{
                    href: t(linkLocation),
                    label: t(linkLabel)
                }}>
                {t(content)}
            </CrisisBanner>
        );
    }

    return <></>;
};

ConditionalCrisisBanner.propTypes = {
};

export default ConditionalCrisisBanner;
