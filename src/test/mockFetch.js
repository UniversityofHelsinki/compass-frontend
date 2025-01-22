const defaultResponse = (body) => ({
    ok: true,
    status: 200,
    json: async () => body,
    clone: () => ({
        ok: true,
        status: 200,
        json: async () => body,
    }),
});

export const mockFetch = () => {
    const mockedPaths = {};

    const addPath = (path, body, method = 'GET') => {
        mockedPaths[path] = { body, method };
    };

    const build = () => {
        return jest.fn().mockImplementation(async (fetchPath, fetchOptions) => {
            for (const [path, response] of Object.entries(mockedPaths)) {
                const requestMethod = fetchOptions?.method || 'GET';
                if (path === fetchPath && requestMethod === response.method) {
                    return defaultResponse(response.body);
                }
            }
        });
    };

    addPath(
        '/api/user',
        defaultResponse({
            eppn: 'baabenom',
            hyGroupCn: ['hy-employees', 'hyad-employees'],
            preferredLanguage: '',
            displayName: 'Baabe Nomypeevo',
            eduPersonAffiliation: ['faculty'],
        }),
    );

    return {
        addPath,
        build,
    };
};
