import React from 'react';
import './Instructions.css';
import { useTranslation } from 'react-i18next';
import TopBar from '../utilities/TopBar';
import { Col, Container, Row } from 'react-bootstrap';
import { ReactComponent as DownloadIcon } from '../utilities/icons/download.svg';
import HyColors from '../utilities/HyColors';
import PropTypes from 'prop-types';

const style = HyColors.white;

const DownloadButton = ({ fileUrl, fileName, buttonText }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            type="button"
            className="tag-button d-flex align-items-center"
            onClick={handleDownload}
            aria-label={`Download ${fileName}`}
        >
            {buttonText}
            <DownloadIcon fill={style} className="ms-2" width="16" height="16" aria-hidden="true" />
        </button>
    );
};

// Instructions Component
const Instructions = () => {
    const { t } = useTranslation();

    return (
        <Container>
            {/* Center the buttons */}
            <Row className="justify-content-center mb-4">
                {/* Column for First Download Button */}
                <Col className="col-auto">
                    <DownloadButton
                        fileUrl="/instructions.pdf"
                        fileName="instructions.pdf"
                        buttonText="Download Instructions"
                    />
                </Col>

                {/* Column for Second Download Button */}
                <Col className="col-auto">
                    <DownloadButton
                        fileUrl="/report.pdf"
                        fileName="report.pdf"
                        buttonText="Download Report"
                    />
                </Col>

                {/* Column for Third Download Button */}
                <Col className="col-auto">
                    <DownloadButton
                        fileUrl="/overview.pdf"
                        fileName="overview.pdf"
                        buttonText="Download Overview"
                    />
                </Col>
            </Row>

            {/* Embed the PDF viewer below the buttons */}
            <Row>
                <Col>
                    <TopBar heading={t('instructions_heading')} />
                    <embed
                        src="/instructions.pdf"
                        width="100%"
                        height="800px"
                        type="application/pdf"
                        frameBorder="0"
                        title="PDF Viewer"
                    />
                </Col>
            </Row>
        </Container>
    );
};

DownloadButton.propTypes = {
    fileUrl: PropTypes.string.isRequired, // URL must be a string and is required
    fileName: PropTypes.string.isRequired, // File name must be a string and is required
    buttonText: PropTypes.string.isRequired, // Button text must be a string and is required
};

export default Instructions;
