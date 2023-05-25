import axios from "axios";
import config from "../services/config.json";

const convertMoneyValue= async (inputFrom)=>{
       
        await axios.get(`${config.api_base_url}/money/list/conversion`)
        .then((data)=>{
            console.log('data', data);
        })
       .catch((error)=>{
        console.log(error);
       });
};
export {convertMoneyValue};