const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailid: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true , unique: true},
}, { timestamps: true });


const taskSchema = new mongoose.Schema({
    task: { type: String, required: true },
    discription: { type: String, required: true },
    category: { type: String, required: true },
    createdby: { type: String, required: true }
  }, { timestamps: true });

const categorySchema = new mongoose.Schema({
    category: { type: String, required: true }
  }, { timestamps: true });


const User = mongoose.model("User", UserSchema);
const Task = mongoose.model("Task", taskSchema);
const Category = mongoose.model("Category", categorySchema);

module.exports = {
  User,
  Task,
  Category

};