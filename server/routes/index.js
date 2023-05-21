const express = require("express");
const router = express.Router();
const task = require('../controller/mini.controller');

router.get('/task',task.fetchData);
router.put('/task', task.putData);
router.post('/task',task.postData);
router.delete('/task/:id',task.deleteData);
module.exports =router;