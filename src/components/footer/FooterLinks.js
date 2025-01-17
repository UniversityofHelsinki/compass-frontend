import React from 'react';
import { useTranslation } from 'react-i18next';
import ExternalLink from '../utilities/ExternalLink';
import Feedback from './Feedback';
import './FooterLinks.css';

const FooterLinks = () => {
    const { t } = useTranslation();
    return (
        <ul>
            <li>
                <ExternalLink
                    to={t('footer_contact_info_link')}
                    label={t('footer_contact_info_link_label')}
                />
            </li>
            <li>
                <ExternalLink
                    to={t('footer_terms_of_use_link')}
                    label={t('footer_terms_of_use_link_label')}
                />
            </li>
            <li>
                <ExternalLink
                    to={'/instructions'}
                    label={t('footer_compass_instructions_link_label')}
                />
            </li>
            <li>
                <ExternalLink
                    to={t('footer_compass_link')}
                    label={t('footer_compass_link_label')}
                />
            </li>
            <li>
                <ExternalLink
                    to={t('footer_accessibility_statement_link')}
                    label={t('footer_accessibility_statement_link_label')}
                />
            </li>
            <li>
                <Feedback
                    to="mailto:self-reflection-compass@helsinki.fi"
                    label={t('footer_compass_feedback')}
                />
            </li>
        </ul>
    );
};

FooterLinks.propTypes = {};

export default FooterLinks;
