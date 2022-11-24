const router = require("express").Router();

const taskController = require('./controllers/taskController');

router.get('/', taskController.createTask);

module.exports = router;