import {Component} from "react";
import * as PropTypes from "prop-types";
import './Course.css'
import React from "react";
import {Link} from "react-router-dom";

const Course = ({course}) => {
        return(
            <Link to={`/student/assignments`} state={{ course: {...course}}}>
              <div className="student-course">
                <div className="student-course-title">
                  <span>
                    {course.title}
                  </span>
                </div>
                <div className="student-course-description">
                  <span>
                    {course.description}
                  </span>
                </div>
              </div>
            </Link>
        )
}

Course.propTypes = {
    course: PropTypes.object
};
export default Course;
