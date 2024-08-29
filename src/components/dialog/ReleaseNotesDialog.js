import React, {useId,  useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Dialog from './Dialog';
import './HelpDialog.css';
//import useReleaseNotes from "../../hooks/useReleaseNotes";
import Markdown from "markdown-to-jsx";
import i18n from "i18next";
import { ReactComponent as InfoDialog } from '../utilities/icons/info-dialog-inverted-colors.svg';


const modifyDate = (releaseDate) => {
    const formattedDate = new Intl.DateTimeFormat('fi-FI', {
        day: '2-digit', month: '2-digit', year: 'numeric'
    }).format(new Date());
    return formattedDate;
};

const ReleaseNotesDialog = ({ label }) => {
    const { t } = useTranslation();
    //const releaseNotes = useReleaseNotes();
    const releaseNotes = [{tag_name: 'Ei tietoa'}, {released_at: '12.04.2024'}, {description: 'Hieno systeemi'}];
    const newestReleaseNotes = [...releaseNotes]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 5);

    const markdownNotes = releaseNotes.length ?
        newestReleaseNotes.map((note, index) => (
            <div key={index}>
                <div className="header">
                    <h3>{t('version_number')} {note.tag_name}</h3>
                    <h3>{t('release_date')} {modifyDate(note.released_at)}</h3>
                </div>
                <div className="markdown-container">
                    <Markdown>{note.description}</Markdown>
                </div>
            </div>
        )) : <p>{t('no_new_releases')}</p>;

    const [show, setShow] = useState(false);
    const headerId = useId();
    const hideDialog = () => setShow(false);
    const toggle = () => setShow(!show);

    const showLink = <Button variant="link" onClick={toggle} className="p-0 help-dialog-button link-light"
                             aria-haspopup="dialog" title={label}>
        <span>{label}</span>
        <span className="mx-1"></span>
        <InfoDialog width="1em" height="1em"/>
    </Button>;

    return (
        <Dialog showComponent={showLink} show={show} hide={hideDialog} aria-labelledby={headerId}>
            <Modal.Header id={headerId} closeButton closeLabel={t('help_dialog_close_label')}>
                {label}
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <div style={{overflowY: 'auto', maxHeight: '50vh'}}>
                                {markdownNotes}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Dialog>
    );
};

ReleaseNotesDialog.propTypes = {
    label: PropTypes.string.isRequired,
    releaseNotes: PropTypes.arrayOf(
        PropTypes.shape({
            version: PropTypes.string,
            description: PropTypes.string,
        })
    ),
};

export default ReleaseNotesDialog;
