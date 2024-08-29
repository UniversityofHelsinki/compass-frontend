import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/header/Header";
import CourseList from "./components/CourseList";
import React, {useEffect, useState} from "react";
import useUser from "./hooks/useUser";
import useLocalStorage from "./hooks/useLocalStorage";
import {useTranslation} from "react-i18next";
import AnswerForm from "./form/AnswerForm";

const Compass = () => {

    const [user, loadUser] = useUser();
    const [userLoadingInitiated, setUserLoadingInitiated] = useState(false);
    const [localStorageGet] = useLocalStorage();
    const { i18n } = useTranslation();
    //const [location, setLocation] = useLocation();
    //const breakpoint = useBreakpoint('xl');
    //const belowBreakpoint = breakpoint?.matches;

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
                    <AnswerForm />
                </Row>
            </Container>
    );


}

Compass.propTypes = {
}

export default Compass;