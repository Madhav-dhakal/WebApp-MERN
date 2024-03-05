const http =require("http");
const app = require("./src/config/express.config");
const server =http.createServer(app)
// const dbConn = require("./src/app/DbConn/dbCon.config");


// dbConn().then(()=>{
server.listen('3005','localhost',(err)=>{
     if(!err){
          console.log("server is running on port 3005");
          console.log("press CTRL+C to disconnect your server");
          console.log("user http://localhost:3005/to browse your server");
     }
})