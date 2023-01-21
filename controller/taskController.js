const { Task } = require("../model");
//const mongoose = require('mongoose')


const taskAdded = async (req, res) => {
    try {
        const { task, discription, category, createdby} = req.body;

        const Task1 = await Task.create({
            task,
            discription,
            category,
            createdby
        });

        res.json({
            success: true,
            message: "Added successfully!",
            data: {
                _id: Task1._id,
                task: Task1.task,
                discription: Task1.discription,
                category: Task1.category
                
                //token: generateToken(user._id)
            }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Some error" });
    }
};

const taskGet = async (req, res) => {
    try {
        const { createdby } = req.body;
        

        const Task1 = await Task.find({createdby : createdby});
    

        res.json({
            success: true,
            message: "Get successfully!",
            data: Task1
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Some error" });
    }
};

const taskUpdate = async (req, res) => {
    try {
        const { _id, task, discription, category, createdby} = req.body;
        
        console.log(_id, task, discription, category, createdby);

        const Task1 = await Task.updateOne({_id : _id},{$set :{
            createdby : createdby,
            task : task,
            discription : discription,
            createdby :createdby,
            category : category
        }});
        

        res.json({
            success: true,
            message: "updated successfully!",
            data: Task1
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Some error" });
    }
};


const taskDelete = async (req, res) => {
    try {
        const { _id, task, discription, category, createdby} = req.body;
        
        console.log(_id, task, discription, category, createdby);

        const Task1 = await Task.deleteOne({_id : _id});
        

        res.json({
            success: true,
            message: "Deleted successfully!",
            data: Task1
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Some error" });
    }
};



module.exports = {
    taskAdded,
    taskGet,
    taskUpdate,
    taskDelete
};
