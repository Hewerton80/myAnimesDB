module.exports = {
    future: {
        webpack5: true,
    },
    pageExtensions: ['tsx'],
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
}