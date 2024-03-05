// auth and authoriztion process
const authCtrl = require("./auth.controller");
const router=require("express").Router();
router.post("/register",authCtrl.register);
router.get("/verify-token/:token",(req,res,next)=>{}) 
// router.get("/set-password",setPassword,(req,res,next)=>{})
router.post("/login",(req,res,next)=>{})
router.post("/forget-password",(req,res,next)=>{})
router.post("/logout",(req,res,next)=>{},(req,res,next)=>{})

module.exports=router;
