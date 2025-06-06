import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';
import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducers';
import { DEFAULT_LANGUAGE } from './Constants';
import Compass from './Compass';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet,
} from 'react-router-dom';
import Teacher from './components/teacher/Teacher';
import Student from './components/student/Student';
import ErrorPage from './Error';
import TeacherForms from './components/teacher/TeacherForms';
import StudentCourses from './components/student/StudentCourses';
import SummaryPage from './components/reflectionSummary/SummaryPage';
import TeacherFormNew from './components/teacher/TeacherFormNew';
import TeacherFormEdit from './components/teacher/TeacherFormEdit';
import FeedbackForEvaluation from './components/feedback/FeedbackForEvaluation';
import Assignment from './components/assignment/Assignment';
import DeleteStudentAnswer from './components/delete/DeleteStudentAnswer';
import Assignments from './components/assignment/Assignments';
import CourseStatistics from './components/course/CourseStatistics';
import TeacherFormDelete from './components/teacher/TeacherFormDelete';
import Instructions from './components/instructions/Instructions';
import StudentListInCourse from './components/student/StudentListInCourse';
import Researchpermission from './components/research/Researchpermission';
import DataProtectionStatementPage from './components/dataProtectionStatement/DataProtectionStatementPage';

const store = createStore(reducer, applyMiddleware(thunk));

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

i18n.use(initReactI18next).init({
    resources: translations,
    lng: defaultLanguage(),
    fallbackLng: 'cimode',
    supportedLngs: ['fi', 'en', 'sv', 'et'],
});

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Compass />} errorElement={<ErrorPage />}>
                <Route path="teacher" element={<Teacher />}>
                    <Route path="forms" element={<TeacherForms />}></Route>
                    <Route path="forms/new" element={<TeacherFormNew />}></Route>
                    <Route path="forms/new/:course" element={<TeacherFormNew />}></Route>
                    <Route path="forms/edit/:course" element={<TeacherFormEdit />}></Route>
                    <Route path="forms/delete/:course" element={<TeacherFormDelete />}></Route>
                    <Route path="statistics/course/:courseId" element={<CourseStatistics />} />
                    <Route
                        path="studentsincourse/:title/:courseId"
                        element={<StudentListInCourse />}
                    />
                </Route>
                <Route path="student" element={<Student />}>
                    <Route path="courses" element={<StudentCourses />}></Route>
                    <Route path="courses/:course" element={<Outlet />}>
                        <Route path="summary" element={<SummaryPage />}></Route>
                    </Route>
                    <Route path="assignments/:id" element={<Assignments />}></Route>
                    <Route path="assignment/:assignment/:id" element={<Assignment />}></Route>
                    <Route
                        path="feedback/:answer/:course/:id"
                        element={<FeedbackForEvaluation />}
                    ></Route>
                    <Route path="delete/:answer/:id" element={<DeleteStudentAnswer />}></Route>
                </Route>
                <Route path="instructions" element={<Instructions />} />
                <Route path="data-protection-statement" element={<DataProtectionStatementPage />} />
                <Route path="research-information" element={<Researchpermission />}></Route>
            </Route>,
        ),
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
