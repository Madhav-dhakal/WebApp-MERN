class AuthController{
     register=(req,res,next)=>{
          const payload = req.body;
          try{
          res.json({
               result:payload,
               message:"Registered successfully",
               meta:null
          })
          }catch(except){
               next(except)
          }
     }
}
   
   const authCtrl=new AuthController;
    module.exports=authCtrl;