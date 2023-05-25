const db=require("../config/database");

const fetchUser = async(req, res)=>{
        console.log("User Data");
        console.log('req.body', req.body);
        const {input, inputage}= req.body;
        try{
            const value= await db.none("INSERT INTO user_data (user_name,user_age) VALUES  ($1,$2)", [input, inputage]);
            console.log('value', value);
            res.send(value);
        }
        catch(error){
            console.log(error);
        }
};

module.exports={fetchUser};