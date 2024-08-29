import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';
import './App.css';
import CourseList from "./components/CourseList";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import courseReducer from './reducers';
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/header/Header";
import {DEFAULT_LANGUAGE} from "./Constants";
import AnswerForm from "./form/AnswerForm";

const store = createStore(courseReducer, applyMiddleware(thunk));

const defaultLanguage = () => {
    try {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            document.documentElement.lang = savedLanguage;
            return savedLanguage;
        }
    } catch (error) {
        console.error(error.message);
    }
    document.documentElement.lang = DEFAULT_LANGUAGE;
    return DEFAULT_LANGUAGE;
};

i18n
    .use(initReactI18next)
    .init({
        resources: translations,
        lng: defaultLanguage(),
        fallbackLng: 'cimode',
        supportedLngs: ['fi', 'en', 'sv']
    });

//listenForBreakpointChanges();


function App() {
  return (
        <Provider store={store}>
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
        </Provider>
  );
}

App.propTypes = {
};

export default App;
