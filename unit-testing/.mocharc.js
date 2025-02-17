

module.exports={
    extension:['.js'],
    spec: ['spec/**/*.spec.js', 'test/**/*.test.js' , 'src/**/*.spec.js' ],
    watchFiles: ['src/**/*.js', 'test/**/*.js', 'spec/**/*.js'],
    watchIgnore: ['node_modules'],
    //watch:true
    reporter:'spec',
    reporterOptions:{
        output: './report.html'
    }
}