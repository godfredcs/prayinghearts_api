const Router = require('express').Router();
const postsController = require('../controllers/postsController');


Router.get('/', postsController.getAll);
Router.get('/filter', postsController.filter);
Router.post('/', postsController.create);
Router.get('/:id', postsController.show);
Router.put('/:id', postsController.update);
Router.delete('/:id', postsController.delete);


module.exports = Router;