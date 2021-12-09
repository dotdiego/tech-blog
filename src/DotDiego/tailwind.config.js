module.exports = {
    purge: {
        enabled: (process.env.ASPNETCORE_ENVIRONMENT === 'production'),
        content: [
            './**/*.html',
            './**/*.razor'
        ],
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("nightwind")],
}
