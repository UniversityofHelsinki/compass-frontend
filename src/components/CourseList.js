import useAllCourses from "../hooks/useAllCourses";
import './CourseList.css'
import DropDown from "../form/DropDown";
import {useState} from "react";
import {useTranslation} from "react-i18next";
const CourseList = () => {
    const { t } = useTranslation();

    const [courses,  _loading, _reload] = useAllCourses(
        {load: true}
    )

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <>
            <label className="label" id="dropdown"> {t('courses')}</label>
            <DropDown
                onChange={(e) => handleChange(e.target.value)}
                selectedOption={selectedOption}
                options={courses}
                id="dropdown"
            />
        </>
    )

}


export default CourseList;