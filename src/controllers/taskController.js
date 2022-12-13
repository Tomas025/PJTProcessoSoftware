const taskModel = require('../models/task');

module.exports = {
    async createTask(req, res){
        const { name, category, dateTimeInitial, dateTimeFinal } = req.body;

        try {
            const task = await taskModel.create({name, category, dateTimeInitial, dateTimeFinal});
            return res.status(200).json(task);
            // return res.status(200).render("main");
        } catch (error) {
            console.log(error);
            return res.status(404).json({msg: "Error create task"});
        }
    },
    
    async index(req, res){
        try {
            const tasks = await taskModel.find();
            return res.status(200).json(tasks);
            // return res.status(200).render("main");
        } catch (error) {
            console.log(error);
            return res.status(404).json({msg: "Error show tasks"});
        }
    },
    
    async getTask(req, res){
        const taskId = req.params.taskId;
        try {
            const task = await taskModel.findById({_id: taskId});
            return res.status(200).json(task);
            // return res.status(200).render("main");
        } catch (error) {
            console.log(error);
            return res.status(404).json({msg: "error show task"});
        }
    }, 
    
    async update(req, res){
        const taskId = req.params.taskId;
        const { name, category, dateTimeInitial, dateTimeFinal, finished } = req.body;
        
        try {
            const task = await taskModel.updateOne({
                name: name || undefined,
                category: category || undefined,
                dateTimeInitial: dateTimeInitial || undefined,
                dateTimeFinal: dateTimeFinal || undefined,
                finished: finished || undefined
            }).where({_id: taskId});
            return res.status(200).json(task);
            // return res.status(200).render("main");
        } catch (error) {
            console.log(error);
            return res.status(404).json({msg: "Update error"});
        }
        
    },
    
    async destroy(req, res){
        const taskId = req.params.taskId;
        
        try {
            const task = await taskModel.deleteOne({_id: taskId});
            return res.status(200).json(task);
            // return res.status(200).render("main");
        } catch (error) {
            console.log(error);
            return res.status(404).json({msg: "Delete error"});
        }
    }, 

    async finishTask(req, res){
        const taskId = req.params.taskId;
        const {finished} = req.body;
        
        try {
            const task = await taskModel.updateOne({finished: !finished}).where({_id: taskId});
            return res.status(200).json(task);
            // return res.status(200).render("main");
        } catch (error) {
            console.log(error);
            return res.status(404).json({msg: "error when finishing task"});
        }
    }
}