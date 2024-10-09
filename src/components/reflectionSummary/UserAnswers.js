import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import SummaryChart from "./SummaryChart";
import SummaryTable from "./SummaryTable";
import { useTranslation } from "react-i18next";
import processUserAnswers from "./processUserAnswers";

const UserAnswersComponent = ({ chartData, tableData }) => (
    <>
        <SummaryChart data={chartData} />
        <SummaryTable data={tableData} />
    </>
);

const UserAnswers = () => {
    const { t } = useTranslation();
    const userAnswersList = useSelector((state) => state.userCourseAnswers.userCourseAnswers);
    const assignmentsList = useSelector((state) => state.assignments.assignments);
    const [processedUserAnswers, setProcessedUserAnswers] = useState({
        chartData: null,
        tableData: null,
    });

    useEffect(() => {
        if (userAnswersList && assignmentsList) {
            const { chartData, tableData } = processUserAnswers(userAnswersList, assignmentsList);
            setProcessedUserAnswers({ chartData, tableData });
        }
    }, [userAnswersList, assignmentsList]);

    if (!processedUserAnswers.chartData || !processedUserAnswers.tableData) {
        return <div>{t('loading_data')}</div>;
    }

    return (
        <UserAnswersComponent
            chartData={processedUserAnswers.chartData}
            tableData={processedUserAnswers.tableData}
        />
    );
};

export default UserAnswers;