module.exports = {
    entry: './demo.jsx',
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/' }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
