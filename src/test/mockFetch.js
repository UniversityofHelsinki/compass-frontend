const defaultResponse = ({ body, status = 200 }) => ({
    ok: status === 200 || !status,
    status: status || 200,
    json: async () => body,
    clone: () => ({
        ok: status === 200 || !status,
        status: status || 200,
        json: async () => body,
    }),
});

export const mockFetch = () => {
    const mockedPaths = {};

    const addPath = (path, { body, method = 'GET', status = 200 }) => {
        if (!mockedPaths[path]) {
            mockedPaths[path] = {};
        }
        mockedPaths[path][method] = { body, method, status };
    };

    const build = () => {
        return jest.fn().mockImplementation(async (fetchPath, fetchOptions) => {
            const requestMethod = fetchOptions?.method || 'GET';
            const mockedPath = mockedPaths[fetchPath] && mockedPaths[fetchPath][requestMethod];
            if (mockedPath) {
                return defaultResponse(mockedPath);
            }
            return defaultResponse({ status: 500, body: undefined });
        });
    };

    addPath('/api/user', {
        body: {
            eppn: 'baabenom',
            hyGroupCn: ['hy-employees', 'hyad-employees'],
            preferredLanguage: '',
            displayName: 'Baabe Nomypeevo',
            eduPersonAffiliation: ['faculty'],
        },
        status: 200,
        method: 'GET',
    });

    return {
        addPath,
        build,
    };
};
