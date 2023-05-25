const express = require('express');
const cors = require('cors');

const app = express();
const routeTask = require("./routes")
const moneyRoute = require("./routes/routeMoney");
const userRouter= require("./routes/routeUser");

app.use(cors());
app.use(express.json());
app.use("/api", routeTask);
app.use("/money",moneyRoute);
app.use("/user",userRouter)

app.get('/',(req, res)=>{
    res.json();
});

app.listen(8080, ()=>{
    console.log(`Server is running on port 8080`);
});