const express = require("express");
const router = express.Router();
const money= require('../controller/moneycontroller');
const user= require('../controller/usercontroller');

router.get('/money', money.getMoneyData);
router .post('/list/conversion',money.getMoneyConversionList)
// router.put('/money', money.postMoneyData);
// router.post('/user',user.fetchUser );
module.exports =router;