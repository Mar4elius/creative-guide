module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "custom-blue": "#54627f",
                "custom-brown": "#847057",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
