const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo');
const authorization = require('../middleware/auth')

router.use(authorization.authenticateJWT)

router.post('/', todoController.createTodo);
router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.put('/:id', todoController.updateTodo);
router.delete('/', todoController.deleteAllTodos);
router.delete('/:id', todoController.deleteTodoById);


module.exports = router;