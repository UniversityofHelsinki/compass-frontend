const processUserAnswers = (userAnswersList, assignmentsList) => {
    const assignmentsMap = assignmentsList.reduce((map, assignment) => {
        map[assignment.assignment.id] = assignment;
        return map;
    }, {});

    const chartData = userAnswersList.map(answer => ({
        userName: answer.user_name,
        value: answer.value,
        orderNumber: answer.order_nbr,
        courseId: answer.course_id
    }));

    const tableData = userAnswersList.map(answer => {
        const assignment = assignmentsMap[answer.assignment.id];
        return {
            created: answer.created,
            assignmentTopic: assignment ? assignment.topic : null,
            orderNumber: answer.order_nbr
        };
    });

    return { chartData, tableData };
};

export default processUserAnswers;