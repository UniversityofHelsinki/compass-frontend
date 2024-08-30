import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/header/Header";
import CourseList from "./components/CourseList";
import React, {useEffect, useState} from "react";
import useUser from "./hooks/useUser";
import useLocalStorage from "./hooks/useLocalStorage";
import {useTranslation} from "react-i18next";
import AnswerForm from "./form/AnswerForm";
import {LEVELS} from "./Constants";
import Footer from "./components/footer/Footer";


const Compass = () => {

    const [user, loadUser] = useUser();
    const [userLoadingInitiated, setUserLoadingInitiated] = useState(false);
    const [localStorageGet] = useLocalStorage();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (!user && !userLoadingInitiated) {
            loadUser();
        }

        return () => setUserLoadingInitiated(true);
    }, []);

    return (
            <Container className="root mx-0">
                <Row className="header-row mb-2">
                    <Col as="header" role="banner" className="px-0">
                        <Header />
                    </Col>
                </Row>
                <Row className="root-main-row">
                    <CourseList />
                    <AnswerForm levelOptions={LEVELS} />
                </Row>
                <Row>
                    <Col as="footer" role="contentinfo" className="px-0">
                        <Footer />
                    </Col>
                </Row>
            </Container>
    );


}

Compass.propTypes = {
}

export default Compass;