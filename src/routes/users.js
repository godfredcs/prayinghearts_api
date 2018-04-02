const Router = require('express').Router();

Router.get('/', (req, res, next) => {
    res.send('you and me')
})

module.exports = Router;