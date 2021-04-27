const express = require("express");
const router = express.Router();

const Tasks = require("../../models/tasks");

/* GET home page. */


const getAllTask = async(req, res, next) => {
  try{
    const tasks = await Tasks.find().sort({time:"desc"});
    // res.send("task created success");
    res.send(tasks);
}catch(err){
    res.send(err);
}       
 
  };
  
  const newTask  = async(req, res, next) => {
    const task = new Tasks({
      uid:req.cookies['uid'],
      task:req.body.task,
      type:req.body.type,
      describe:req.body.describe
  });

  try{
      const saved = await task.save();
      // res.send("task created success");
      res.send(saved);
  }catch(err){
      res.send(err);
 }      
  };
  
  
const getTask  = async (req, res, next) =>{

try{
  const task = await Tasks.findOne({uid:req.params.uid})
  // res.send("task created success");
  res.send(task);
}catch(err){
  res.send(err);
} 
};

 const updateTask  = async(req, res, next) =>{
try{
  const update = await Tasks.findOneAndUpdate({uid:req.params.uid},{$set:{task:req.body.task}});
  // res.send("task created success");
  res.send(update);
}catch(err){
  res.send(err);
}  

};

const deleteTask = async(req, res, next) =>{
  try{
    const deleted = await Tasks.findOneAndDelete({uid:req.params.uid});
       res.send("deleted success");
  }catch(err){
    res.send(err);
  }  

};




module.exports = {  newTask,getAllTask ,getTask,updateTask,deleteTask};
