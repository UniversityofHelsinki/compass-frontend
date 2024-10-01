import useAllCourses from "../hooks/useAllCourses";
import './CourseList.css'
import DropDown from "../form/DropDown";
import {Component, useState} from "react";
import {useTranslation} from "react-i18next";
import * as PropTypes from "prop-types";
import Course from "./Course";

const CourseList = () => {
    const { t } = useTranslation();
    const [courses,  _loading, _reload] = useAllCourses(
        {load: true}
    )

    const [selectedOption, setSelectedOption] = useState("");

    const listCourses = () => {
        return(
            <div>
                <ul className="course-list">
                    {courses && courses?.length > 0 && courses?.map((course) =>
                      <li className="course-row">
                          <Course  course={course}/>
                      </li>
                    )}
                </ul>
            </div>)
    }

    const noCoures = () => {
        return(
            <div className="no-courses"> {t('student_no_courses')}
            </div>
        )
    }

    if (courses) {
        return listCourses();
    }
    return noCoures();
}

CourseList.propTypes = {};

export default CourseList;