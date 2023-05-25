const express = require("express");
const router = express.Router();

const user= require('../controller/usercontroller');
router.post('/user',user.fetchUser );

module.exports=router;