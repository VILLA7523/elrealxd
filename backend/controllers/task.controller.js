const Task = require('../models/task');

exports.test = async (req, res) =>{
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
}