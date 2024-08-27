import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CourseList from "./components/CourseList";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import courseReducer from './reducers';

const store = createStore(courseReducer, applyMiddleware(thunk));

function App() {
  return (
        <Provider store={store}>
            <CourseList />
        </Provider>
  );
}

export default App;
