import useStudentAnswers from "./useStudentAnswers";
import useStudentAssignments from "./useStudentAssignments";

const useStudentReflectionSummary = ({ course }) => {
    const answers = useStudentAnswers({ course });
    const assignments = useStudentAssignments({ course });

    if (!answers || !assignments) {
        return [];
    }

    return assignments.map((assignment) => {
        const copy = { ...assignment };
        answers.forEach(answer => {
            if (answer.assignment_id === copy.assignment_id) {
               copy.answer = answer;
            }
        });
        return copy;
    });

};

export default useStudentReflectionSummary;