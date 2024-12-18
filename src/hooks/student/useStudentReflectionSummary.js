import useStudentAnswers from './useStudentAnswers';
import useStudentAssignments from './useStudentAssignments';
import useTeacherFeedbackForCourse from '../teacher/useTeacherFeedBackForCourse';

const useStudentReflectionSummary = ({ course }) => {
    //const answers = useStudentAnswers({ course });
    const assignments = useStudentAssignments({ course });
    //const feedbacks = useTeacherFeedbackForCourse(course);
    if (!assignments) {
        return [];
    }
    /*if (!answers || !assignments || !feedbacks || !feedbacks[0]) {
        return [];
    }
    let feedbackObjects = feedbacks[0];
*/
    /*return assignments.map((assignment) => {
        const copy = { ...assignment };
        answers.forEach(answer => {
            if (answer.assignment_id === copy.assignment_id) {
               copy.answer = answer;
            }
        });
        feedbackObjects.map(feedback =>  {
            if (feedback.assignment_id === copy.assignment_id &&
                feedback.user_name === copy.answer.user_name) {
                //vaikuttaako se db projektin muutos name, user_name tähän !!!
                copy.feedback = feedback;
            }
        });
        return copy;
    });*/
    return assignments;
};

export default useStudentReflectionSummary;
