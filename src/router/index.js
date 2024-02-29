const router= require('express').Router();
const authRouter=require("../app/auth/auth.router")
// const catRouter=require("../app/")

router.use(authRouter);
module.exports=router;