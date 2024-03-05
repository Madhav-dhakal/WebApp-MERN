// require("dotenv").config();
const mongoose=require("mongoose");
const URI= process.env.MONGODB_URI;

         console.log("connecting to Database....");
       mongoose.connect(URI,{
          dbName:process.env.MONGODB_NAME,
          autoCreate:true,
          autoIndex:true
      }).then((success)=>{
        console.log("Database Connected Successfully");
     })
     .catch((error)=>{
          console.log("db connection failed",error);
     })

