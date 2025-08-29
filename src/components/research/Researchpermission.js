import React from 'react';
import './Researchpermission.css';
import { useTranslation } from 'react-i18next';
import TopBar from '../utilities/TopBar';
import { Col, Container, Row } from 'react-bootstrap';
import { ReactComponent as DownloadIcon } from '../utilities/icons/download.svg';
import PropTypes from 'prop-types';
import EnglishPage from './EnglishPage';
import FinnishPage from './FinnishPage';
import SwedishPage from './SwedishPage';
import EstonianPage from './EstonianPage';

const DownloadLink = ({ fileUrl, fileName, linkText }) => {
    return (
        <a href={fileUrl} download={fileName} aria-label={`Download ${fileName}`}>
            {linkText}
            <DownloadIcon
                className="ms-2"
                width="16"
                height="16"
                aria-hidden="true"
                focusable="false"
            />
        </a>
    );
};

const renderContent = (language) => {
    switch (language) {
        case 'fi':
            return <FinnishPage />;
        case 'en':
            return <EnglishPage />;
        case 'sv':
            return <SwedishPage />;
        case 'et':
            return <EstonianPage />;
        default:
            return <EnglishPage />; // Default to English
    }
};

const Researchpermission = () => {
    const { t, i18n } = useTranslation();
    return (
        <Container>
            <Row>
                <Col>
                    <TopBar heading={t('research_permission')} />
                    {renderContent(i18n.language)}
                </Col>
            </Row>
        </Container>
    );
};

DownloadLink.propTypes = {
    fileUrl: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
};

export default Researchpermission;
