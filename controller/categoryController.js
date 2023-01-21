const { Category } = require("../model");
//const mongoose = require('mongoose')


const categoryAdded = async (req, res) => {
    try {
        const { category } = req.body;

        const cat = await Category.create({
            category
        
        });

        res.json({
            success: true,
            message: "Added successfully!",
            data: {
                
                category: cat.category,
                //token: generateToken(user._id)
            }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Some error" });
    }
};


const getCategory = async (req, res) => {
    try {
        const cat = await Category.find({});

        res.json(cat);
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Some error" });
    }
};


const categorydelete = async (req, res) => {
    try {
        const { _id } = req.body;

        const cat = await Category.deleteOne({
            _id : _id
        
        });

        res.json({
            success: true,
            message: "Deleted successfully!",
            data: {
                
                category: cat.category,
                //token: generateToken(user._id)
            }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Some error" });
    }
};




module.exports = {
    categoryAdded,
    getCategory,
    categorydelete
};
