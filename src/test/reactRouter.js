export const mockRouter = ({ useParams, useNavigate = console.log }) => {
    const original = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...original,
        useParams: () => useParams,
        useNavigate: () => useNavigate,
    };
};
