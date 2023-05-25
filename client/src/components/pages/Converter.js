import React, { useEffect, useState } from "react";
import "../Styles/Converter.css";
import axios from "axios";
import config from "../../services/config.json";
// import { addMoney } from "../../services/ConverterDb";
// import { convertMoneyValue } from "../../services/ConverterDb";

function Convertor() {
  const [list,setList] = useState([]);
  const [fromCurrency,setFromCurrency] = useState("INR");
  const [toCurrency,setToCurrency] = useState("USD");
  const [inputFrom,setInputFrom] = useState(0);
  const [output,setOutput] = useState([]);


  useEffect(() => {
    fetchMoney();
  }, []);

  const fetchMoney = async () => {
    await axios
      .get(`${config.api_base_url}/money/money`)
      .then(({ data }) => {
        setList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("list", list);


  const convertMoney=async ()=>{
    console.log('fromCurrency,toCurrency,inputFrom', fromCurrency,toCurrency,inputFrom);
  const data= {from:fromCurrency,to:toCurrency,inputFrom};
  // convertMoneyValue(output);
  await axios.post(`${config.api_base_url}/money/list/conversion`, data)
        .then((output)=>{
           console.log('output', output.data.data);
            setOutput(output.data.data);
        })
       .catch((error)=>{
        console.log(error);
       });

      
    // setOutput(1000);
  };

  console.log('from,to', fromCurrency,toCurrency);

  return (
    <div className="container">
      <h1>Money Converter</h1>
      <div className="row">
        <div className="col">
          <select
            className="currency"
            value={fromCurrency}
            onChange={(e) => {
              setFromCurrency(e.target.value);
            }}
          >
            {list.map((currency) => (
              <option value={currency.currency}>{currency.currency}</option>
            ))}
          </select>
          <input
            type="number"
            className="input_currency"
            value={inputFrom}
            onChange={(e) => setInputFrom(e.target.value)}
          />
        </div>
        <button className="btn" onClick={convertMoney}>Convert</button>
        <div className="col">
         <select className="currency" value={toCurrency} onChange={(e)=>{
            setToCurrency(e.target.value)
          }}> 
            {list.map((currency) => (
              <option value={currency.currency}>
                {currency.currency}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="output_currency"
            value={output}
            // onChange={(e)=>setOutput(e.target.value )}
          />
        </div>
      </div>
    </div>
  );
}

export default Convertor;
