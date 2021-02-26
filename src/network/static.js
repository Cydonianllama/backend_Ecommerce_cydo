const path = require('path')

const static_directories = (framework,app) => {
    app.use(framework.static(path.resolve('dist')))
    app.use('/images',framework.static(path.resolve('public','images')))
    app.use('/avatar',framework.static(path.resolve('public', 'avatar')))
}

module.exports = static_directories;