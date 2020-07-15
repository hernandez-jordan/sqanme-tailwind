const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss')('./tailwind.js'),
    ],
};