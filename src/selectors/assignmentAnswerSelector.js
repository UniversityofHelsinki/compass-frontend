import { createSelector } from 'reselect';

const selectAssignmentsState = (state) => state.assignments;

export const assignmentAnswers = () =>
    createSelector(
        [selectAssignmentsState, (state, assignmentId) => assignmentId],
        (assignments, assignmentId) => assignments.answers[assignmentId] || [],
    );
