import React from 'react';
import './DataProtectionStatementPage.css';
import { useTranslation } from 'react-i18next';
import TopBar from '../utilities/TopBar';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const DataProtectionStatementPage = () => {
    const { t } = useTranslation();
    return (
        <Container className="data-protection-statement-page-main-container">
            <Row>
                <Col>
                    <TopBar heading={t('data_protection_page_top_bar_heading')} />
                </Col>
            </Row>
            <Row>
                <Col as="h3" className="main-info-heading">
                    <div className="main-info-heading-1 me-lg-1">{t('main_info_heading_1')}</div>
                    <div>{t('main_info_heading_2')}</div>
                </Col>
            </Row>
            <Row className="main-info">
                <Col>
                    <div>{t('main_info_line_1')}</div>
                    <div>{t('main_info_line_2')}</div>
                    <div>{t('main_info_line_3')}</div>
                </Col>
            </Row>
            <Row>
                <Col as="h4" className="item-1-heading mx-lg-3">
                    {t('item_1_heading')}
                </Col>
            </Row>
            <Row className="item-1-text mx-lg-4">
                <Col>
                    <div>{t('item_1_line_1')}</div>
                    <br></br>
                    <div>{t('item_1_line_2')}</div>
                    <div>{t('item_1_line_3')}</div>
                    <div>{t('item_1_line_4')}</div>
                    <div>{t('item_1_line_5')}</div>
                    <br></br>
                    <div>{t('item_1_line_6')}</div>
                    <div>{t('item_1_line_7')}</div>
                </Col>
            </Row>
            <Row>
                <Col as="h4" className="item-2-heading mx-lg-3">
                    {t('item_2_heading')}
                </Col>
            </Row>
            <Row className="item-2-text mx-lg-4">
                <Col>
                    <div>{t('item_2_line_1')}</div>
                    <a
                        href="mailto:tietosuoja@helsinki.fi"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-haspopup="dialog"
                    >
                        {t('item_2_line_2')}
                    </a>
                </Col>
            </Row>
            <Row>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header as="h4">{t('item_3_heading')}</Accordion.Header>
                        <Accordion.Body>
                            <div>{t('item_3_line_1')}</div>
                            <br></br>
                            <div>{t('item_3_line_2')}</div>
                            <br></br>
                            <div>{t('item_3_line_3')}</div>
                            <br></br>
                            <div>{t('item_3_line_4')}</div>
                            <ul>
                                <li>{t('item_3_line_5')}</li>
                                <li>{t('item_3_line_6')}</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{t('item_4_heading')}</Accordion.Header>
                        <Accordion.Body>
                            <div>{t('item_4_line_1')}</div>
                            <ul>
                                <li>{t('item_4_line_2')}</li>
                                <li>{t('item_4_line_3')}</li>
                                <li>{t('item_4_line_4')}</li>
                                <li>{t('item_4_line_5')}</li>
                            </ul>
                            <div>{t('item_4_line_6')}</div>
                            <ul>
                                <li>{t('item_4_line_7')}</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>{t('item_5_heading')}</Accordion.Header>
                        <Accordion.Body>
                            <div>{t('item_5_line_1')}</div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>{t('item_6_heading')}</Accordion.Header>
                        <Accordion.Body>
                            <div>{t('item_6_line_1')}</div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>{t('item_7_heading')}</Accordion.Header>
                        <Accordion.Body className="item-7-body">
                            <div className="mb-3">{t('item_7_line_1')}</div>
                            <div className="fw-bold mb-2 mt-3">{t('item_7_line_2')}</div>
                            <div>{t('item_7_line_3')}</div>
                            <div className="fw-bold mb-2 mt-3">{t('item_7_line_4')}</div>
                            <div>{t('item_7_line_5')}</div>
                            <div className="fw-bold mb-2 mt-3">{t('item_7_line_6')}</div>
                            <div>{t('item_7_line_7')}</div>
                            <div className="fw-bold mb-2 mt-3">{t('item_7_line_8')}</div>
                            <div className="mb-lg-1">{t('item_7_line_9')}</div>
                            <ol type="a" className="item-7-body-list-1">
                                <li>{t('item_7_line_10')}</li>
                                <li>{t('item_7_line_11')}</li>
                                <li>{t('item_7_line_12')}</li>
                                <li>{t('item_7_line_13')}</li>
                                <li>{t('item_7_line_14')}</li>
                            </ol>
                            <div className="mb-lg-1 fw-bold">{t('item_7_line_15')}</div>
                            <ol type="a" className="item-7-body-list-2">
                                <li>{t('item_7_line_16')}</li>
                                <li>{t('item_7_line_17')}</li>
                                <li>{t('item_7_line_18')}</li>
                            </ol>
                            <div className="mb-lg-2 fw-bold">{t('item_7_line_19')}</div>
                            <div>{t('item_7_line_20')}</div>
                            <div className="mt-3 mb-3">{t('item_7_line_21')}</div>
                            <ol type="a" className="item-7-body-list-3">
                                <li>{t('item_7_line_22')}</li>
                                <li>{t('item_7_line_23')}</li>
                                <li>{t('item_7_line_24')}</li>
                                <li>{t('item_7_line_25')}</li>
                            </ol>
                            <div className="mb-lg-2 fw-bold">{t('item_7_line_26')}</div>
                            <div>{t('item_7_line_27')}</div>
                            <div className="mb-lg-2 mt-lg-2 fw-bold">{t('item_7_line_28')}</div>
                            <div>{t('item_7_line_29')}</div>
                            <div className="mb-lg-4 mt-lg-4">{t('item_7_line_30')}</div>
                            <div>{t('item_7_line_31')}</div>
                            <div>{t('item_7_line_32')}</div>
                            <div>{t('item_7_line_33')}</div>
                            <div>{t('item_7_line_34')}</div>
                            <div>{t('item_7_line_35')}</div>
                            <div>{t('item_7_line_36')}</div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    );
};

export default DataProtectionStatementPage;
