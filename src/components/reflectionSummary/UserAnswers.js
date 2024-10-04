import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import SummaryChart from "./SummaryChart";
import SummaryTable from "./SummaryTable";
import { useTranslation } from "react-i18next";

const UserAnswersComponent = ({ chartData, tableData }) => (
    <>
        <SummaryChart data={chartData} />
        <SummaryTable data={tableData} />
    </>
);

const UserAnswers = () => {
    const { t } = useTranslation();
    const userAnswersList = useSelector((state) => state.userCourseAnswers.userCourseAnswers);
    const [processedUserAnswers, setProcessedUserAnswers] = useState({
        chartData: null,
        tableData: null,
    });

    useEffect(() => {
        if (userAnswersList) {
            const { chartData, tableData } = processUserAnswers(userAnswersList);
            setProcessedUserAnswers({ chartData, tableData });
        }
    }, []);

    const processUserAnswers = (userAnswersList) => {
        const chartData = userAnswersList.map(answer => ({

        }));
        const tableData = userAnswersList.map(answer => ({

        }));
        return { chartData, tableData };
    };

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