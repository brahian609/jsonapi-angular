let config = {
    entry: {
        app: './app/app.module.js'
    },
    output:{
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    modules: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]

};