import {Component} from "react";
import * as PropTypes from "prop-types";
import './Course.css'
import React from "react";
import {Link} from "react-router-dom";

const Course = ({course}) => {
        return(
            <Link to={`/student/assignments/${course.id}`} className="course-link">
                <div>
                    <div className="course-title">
                      <span>
                        {course.title}
                      </span>
                    </div>
                    {/*<div className="course-list-line-container">
                        <hr className="line"></hr>
                    </div>*/}
                    {/*<div className="student-course-description">
                  <span>
                    {course.description}
                  </span>
                </div>*/}
                </div>
            </Link>
        )
}

Course.propTypes = {
    course: PropTypes.object
};
export default Course;
