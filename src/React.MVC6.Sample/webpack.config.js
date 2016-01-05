var path = require('path');

module.exports = {
    context: path.join(__dirname, 'wwwroot'),
    entry: {
        server: './server',
        client: './client'
    },
    output: {
        path: path.join(__dirname, 'wwwroot/build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            // Transform JSX in .jsx files
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
        ],
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        // Use external version of React (from CDN for client-side, or
        // bundled with ReactJS.NET for server-side)
        react: 'React'
    }
};