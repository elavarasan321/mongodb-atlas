const express = require("express");
const router = express.Router();

const User = require("../../models/user");
const {hashcreator} = require("../security/hash");
const {hashcheck} = require("../security/hash");
const {tokencreator} = require("../security/token");


/* GET home page. */



  
  const newUser = async(req,res)=>{
       const hashpass = await hashcreator(req.body.password);
        
        const user = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashpass
        });
      
        try{
            const saved = await user.save();
            res.send("created success");
        }catch(err){
            res.send(err);
       }      
      
  };

  const loginUser = async(req,res)=>{
    const exist = await User.findOne({email:req.body.email});
    try{
        if(!exist)
        {
            res.redirect("/login");
        }
        else{
            try{
                const checkpass = await hashcheck(req.body.password,exist.password)
                if(checkpass)
                {
                    const token = await tokencreator(exist.email);
                    res.cookie("jwt",token); 
                    res.cookie("uid",exist.email); 
                    res.send("success login");            
                }else
                {
                    res.redirect("/login");
                }
            }catch(err){
                res.send(err);
            }
        }
   }catch(err)
   {
       console.log(err);
   }

};

const logoutUser = (req,res)=>{      
    res.clearCookie('uid');
    res.clearCookie('jwt');
    res.send("cookie clear");
   
};
  



module.exports = { loginUser, newUser,logoutUser };