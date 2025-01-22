export const mockRouter = ({ useParams }) => {
    const original = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...original,
        useParams: () => useParams,
    };
};
