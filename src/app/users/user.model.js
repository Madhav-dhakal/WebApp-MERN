const mongoose= require("mongoose");
const userSchema=new mongoose.Schema({
     username:{
          type:String,
          required:true,
          min:3,
          max:50
     },
     email:{
          type:String,
          required:true,
          unique:true
     },
     phone:{
          type:String,
          required:true
     },
     password:{
          type:String,
          required:true
     },
     isAdmin:{
          type:Boolean,
          default:false
     }
},
     {
          // Atcreate Atupdate
          timestamps:true,
          autoCreate:true,
          autoIndex:true
     

})
     const userModel= mongoose.model("User",userSchema)
   module.exports=userModel;