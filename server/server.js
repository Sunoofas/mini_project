const express = require('express');
const cors = require('cors');

const app = express();
const routeTask = require("./routes")
app.use(cors());
app.use(express.json());
app.use("/api", routeTask);

app.get('/',(req, res)=>{
    res.json();
});

app.listen(8080, ()=>{
    console.log(`Server is running on port 8080`);
});