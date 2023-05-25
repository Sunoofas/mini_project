import React, { useState } from "react";
import  "../Styles/Contact.css";
import axios from "axios";
import config from "../../services/config.json";

const Contact =()=>{
    const [input, setInput]= useState("");
    const [inputage, setInputAge]= useState("");
    // const [output, setOutput]= useState([]);

    const sendData=async()=>{
        console.log('input', input);
        console.log('inputage', inputage);
        const details= {input, inputage};
        await axios.post(`${config.api_base_url}/user/user`,details);
    };
    
    return (
        <div className="contact">
           <input type="text"
           className="inputvalue"
           value={input}
           placeholder="enter the value"
           onChange={(e)=>setInput(e.target.value)}></input>
           <input
           type="number"
           value={inputage}
           placeholder="enter your age"
           onChange={(e)=>setInputAge(e.target.value)}></input>
           
           <button className="send-btn" onClick={sendData}>Send</button>
           
           
        </div>
    )
};
export default Contact; 