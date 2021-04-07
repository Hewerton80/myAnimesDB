module.exports = {
    future: {
        webpack5: true,
        asePath: '/animes',
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/animes',
                permanent: true,
            },
        ]
    },
}