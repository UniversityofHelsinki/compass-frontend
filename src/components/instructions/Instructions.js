import React from 'react';
import './Instructions.css';
import { useTranslation } from 'react-i18next';
import TopBar from '../utilities/TopBar';
import { Col, Container, Row } from 'react-bootstrap';
import { ReactComponent as DownloadIcon } from '../utilities/icons/download.svg';
import PropTypes from 'prop-types';

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

const Instructions = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Row className="justify-content-center mb-4">
                <Col className="col-auto">
                    <DownloadLink
                        fileUrl="/instructions.pdf"
                        fileName="instructions.pdf"
                        linkText={t('download_instructions')}
                    />
                </Col>

                <Col className="col-auto">
                    <DownloadLink
                        fileUrl="/slides.pdf"
                        fileName="slides.pdf"
                        linkText={t('download_slides')}
                    />
                </Col>

                <Col className="col-auto">
                    <DownloadLink
                        fileUrl="/slides.pptx"
                        fileName="slides.pptx"
                        linkText={t('download_slides_powerpoint')}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <TopBar heading={t('instructions_heading')} />
                    <div className="embed-responsive-container">
                        <embed
                            src="/instructions.pdf"
                            width="100%"
                            height="100%"
                            type="application/pdf"
                            frameBorder="0"
                            title="PDF Viewer"
                        />
                    </div>
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

export default Instructions;
