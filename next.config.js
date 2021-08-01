module.exports = {
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
    images: {
        loader: 'imgix',
        path: '',
    },
}