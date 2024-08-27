import useAllCourses from "../hooks/useAllCourses";
import './CourseList.css'
import DropDown from "../form/DropDown";
const CourseList = () => {

    const [courses,  _loading, _reload] = useAllCourses(
        {load: true}
    )

    return (
        <>
            <label className="label" id="dropdown">Kurssilista</label>
            <DropDown
                options={courses}
                id="dropdown"
            />
        </>
    )

}


export default CourseList;