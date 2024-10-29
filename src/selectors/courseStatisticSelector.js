import { createSelector } from 'reselect';

const selectCoursesStatisticsState = (state) => state.courses.statistics || {};

export const getCoursesStatistics = createSelector([selectCoursesStatisticsState], (statistics) => {
    return { ...statistics };
});
