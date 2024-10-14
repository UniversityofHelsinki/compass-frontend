import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translations from './translations';
import './App.css';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import reducer from './reducers';
import {DEFAULT_LANGUAGE, LEVELS} from "./Constants";
import Compass from "./Compass";
import {AuthProvider} from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Teacher from './components/teacher/Teacher';
import Student from './components/student/Student';
import Error from './Error';
import TeacherForms from './components/teacher/TeacherForms';
import StudentCourses from './components/student/StudentCourses';
import TeacherFormNew from './components/teacher/TeacherFormNew';
import FeedbackForEvaluation from "./components/feedback/FeedbackForEvaluation";
import Assignment from "./components/assignment/Assignment";

const store = createStore(reducer, applyMiddleware(thunk));

const assignment_name = "Assignment 1";
const course = "Ohjelmoinnin perusteet 2024"
const backBtnLabels={
    primary: 'Back',
    secondary: ''
};

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

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Compass />} errorElement={<Error />}>
          <Route path="teacher" element={<Teacher />}>
            <Route path="forms" element={<TeacherForms />}>
            </Route>
            <Route path="forms/new" element={<TeacherFormNew />}>
            </Route>
          </Route>
          <Route path="student" element={<Student />}>
            <Route path="courses" element={<StudentCourses />}>
            </Route>
            <Route path="assignments/:assignment" element={<Assignment levels={LEVELS} backBtnLabels={backBtnLabels}/>}>
            </Route>
            <Route path="feedback/:answer" element={<FeedbackForEvaluation />}>
            </Route>
          </Route>
        </Route>
      )
    );

    return (
        <Provider store={store}>
            <AuthProvider>
              <ProtectedRoute>
                <RouterProvider router={router} />
              </ProtectedRoute>
            </AuthProvider>
        </Provider>
    );
};

App.propTypes = {};

export default App;
