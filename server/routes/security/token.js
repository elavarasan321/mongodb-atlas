const jwt = require("jsonwebtoken");
const tokenkey = "emailencryption";

const tokencreator =(email)=>{
    const token = jwt.sign(
        {email},
        tokenkey,
        { expiresIn : "3h"}
    );
    return token;
}

const tokenchecker =(token)=>{
    
    const check = jwt.verify(token,tokenkey);
  
    return check;   
}

module.exports.tokencreator = tokencreator;
module.exports.tokenchecker = tokenchecker;