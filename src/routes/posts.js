const Router = require('express').Router();

Router.get('/', (req, res, next) => {
    res.send("good")
});

module.exports = Router;