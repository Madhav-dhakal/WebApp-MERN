const userModel = require("../users/user.model");
const bcrypt=require("bcryptjs")
class AuthController{
     register=async (req,res,next)=>{
          try{
          // const {username,email,phone,password} = req.body;
          // const userExist=User.findOne({email:email});
          // if(userExist){
          //      return res.json({
          //           result:null,
          //           message:"email already exists"
               
          //      });
          // }
          // else{
          // await User.save({username,email,phone,password})
          // }
             
          let user=new userModel(req.body);
          
          
               let data = req.body;
               let salt=10;
               let encPass=bcrypt.hashSync(data.password,salt)
               user.password = encPass;
               let response=await user.save();
               res.status(201).json({
                    result:response,
                    message:"user registered successfuly",
                    meta:null
                   })
           
          
         
          }catch(except){
               next(except)
          }
     
     
}
}
   
   const authCtrl=new AuthController;
    module.exports=authCtrl;