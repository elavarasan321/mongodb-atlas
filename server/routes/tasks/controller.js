const express = require("express");
const router = express.Router();

const Tasks = require("../../models/tasks");

/* GET home page. */


const getAllTask = async(req, res, next) => {
  
    const tasks = await Tasks.find().sort({time:"desc"});
    if(tasks)
      {
          res.status(200).send(tasks);
         
      }else{
          res.status(500).send({error:"something Failed"});
     }  
 
  };
  
  const newTask  = async(req, res, next) => {
      console.log(req.body);
    const task = new Tasks({
     // uid:req.cookies['uid'],
      task:req.body.task,
      type:req.body.type,
      describe:req.body.describe
  });
      const saved = await task.save();
      if(saved)
      {
          res.status(200).send("task created success");
         
      }else{
          res.status(500).send({error:"something Failed"});
     } 
  };
  
  
const getTask  = async (req, res, next) =>{


  const task = await Tasks.findOne({uid:req.params.uid})
  if(task)
      {
          res.status(200).send(task);
         
      }else{
          res.status(500).send({error:"something Failed"});
     } 
  
};

 const updateTask  = async(req, res, next) =>{

  const update = await Tasks.findOneAndUpdate({uid:req.params.uid},{$set:{task:req.body.task}});
  if(update)
      {
          res.status(200).send("updated success");
         
      }else{
          res.status(500).send({error:"something Failed"});
     } 
  
  

};

const deleteTask = async(req, res, next) =>{
  
    const deleted = await Tasks.findOneAndDelete({uid:req.params.uid});
    if(deleted)
    {
        res.status(200).send("deleted success");
       
    }else{
        res.status(500).send({error:"something Failed"});
   } 

};




module.exports = {  newTask,getAllTask ,getTask,updateTask,deleteTask};
