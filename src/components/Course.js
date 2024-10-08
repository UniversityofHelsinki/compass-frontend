import {Component} from "react";
import * as PropTypes from "prop-types";
import './Course.css'
import React from "react";

const Course = ({course}) => {
        return(
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
        )
}

Course.propTypes = {course: PropTypes.any};
export default Course;
