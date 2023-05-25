const db = require("../config/database");

//fetching the converted money 
const getMoneyData=async(req, res)=>{
    console.log('GetTheMoneyData');
    try{
        const output= await db.any("SELECT * FROM mini_converter");
        console.log('output', output);
        res.send(output);
    }
   catch(error){
    console.log(error);
   }
};

//Inserting money details into table

// const postMoneyData= async(req, res)=>{
//     console.log("Added Money");
//     console.log('req.body', req.body);
//     try{
//         const postvalue= await db.none("INSERT INTO mini_converter1 am_from, am_to, rate VALUES ($1),($2),($3)",[req.body]);
//         console.log('postvalue', postvalue);
//         res.send(postvalue);
//     }
//     catch(error){
//         console.log(error);
//     }
// };



const getMoneyConversionList = async(req,res)=>{
    console.log('INSIDE LIST',req);
    try{
        const list = await db.any("Select * from mini_converter1 where am_from=${from} and am_to =${to}",req.body)
        console.log('list', list);
        console.log('list.rate', list[0].rate);
        
        const amount= req.body.inputFrom*list[0].rate;
        console.log('amount', amount);
        res.send({
            status:200,
            data:amount
            
           
        })

    } catch(err){
        console.log('err', err);
    }
};

module.exports= {getMoneyData, getMoneyConversionList};