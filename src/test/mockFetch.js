const defaultResponse = ({ body, status = 200 }) => ({
    ok: status === 200 || !status,
    status: status || 200,
    json: async () => body,
    clone: () => ({
        ok: true,
        status: status || 200,
        json: async () => body,
    }),
});

export const mockFetch = () => {
    const mockedPaths = {};

    const addPath = (path, { body, method = 'GET', status = 200 }) => {
        mockedPaths[path] = { body, method, status };
    };

    const build = () => {
        return jest.fn().mockImplementation(async (fetchPath, fetchOptions) => {
            for (const [path, response] of Object.entries(mockedPaths)) {
                const requestMethod = fetchOptions?.method || 'GET';
                if (path === fetchPath && requestMethod === response.method) {
                    return defaultResponse(response);
                }
            }
            console.log(`Path ${fetchPath} (${fetchOptions?.method}) not mocked. Returning 500`);
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
