import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translations from './translations';
import './App.css';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import courseReducer from './reducers';
import {DEFAULT_LANGUAGE} from "./Constants";
import Compass from "./Compass";
import {AuthProvider} from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

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
        supportedLngs: ['fi', 'en', 'sv', 'ee']
    });

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<ProtectedRoute component={Compass} />} />
                        {/* Other routes can go here */}
                    </Routes>
                </Router>
            </AuthProvider>
        </Provider>
    );
};

App.propTypes = {};

export default App;
