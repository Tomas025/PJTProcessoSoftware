const router = require("express").Router();

const taskController = require('./controllers/taskController');

router.get('/', taskController.createTask);
// router.post('/createtask', taskController.createTask);
// router.get('/alltask', taskController.index);
// router.get('/gettask/:taskId', taskController.getTask);
// router.post('/updatetask/:taskId', taskController.update);
// router.get('/deletetask/:taskId', taskController.destroy);
// router.post('/finishtask/:taskId', taskController.finishTask);

module.exports = router;