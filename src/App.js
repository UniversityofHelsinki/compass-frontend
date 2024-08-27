import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CourseList from "./components/CourseList";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import courseReducer from './reducers';
import AnswerForm from "./form/AnswerForm";

const store = createStore(courseReducer, applyMiddleware(thunk));

function App() {
  return (
        <Provider store={store}>
            <CourseList />
            <AnswerForm />
        </Provider>
  );
}

export default App;
