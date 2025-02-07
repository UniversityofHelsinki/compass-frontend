import React from 'react';
import { useTranslation } from 'react-i18next';
import ExternalLink from '../utilities/ExternalLink';
import Feedback from './Feedback';
import './FooterLinks.css';
import useUser from '../../hooks/useUser';
import { ROLE_TEACHER } from '../../Constants';

const FooterLinks = () => {
    const { t } = useTranslation();
    const [user] = useUser();
    const isTeacher = user?.eduPersonAffiliation?.includes(ROLE_TEACHER);
    return (
        <ul>
            <li>
                <ExternalLink
                    to={t('footer_contact_info_link')}
                    label={t('footer_contact_info_link_label')}
                />
            </li>
            {isTeacher && (
                <li>
                    <ExternalLink
                        to={'/instructions'}
                        label={t('footer_compass_instructions_link_label')}
                    />
                </li>
            )}
            <li>
                <ExternalLink
                    to={t('footer_compass_data_protection_statement_link')}
                    label={t('footer_compass_data_protection_statement_link_label')}
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
