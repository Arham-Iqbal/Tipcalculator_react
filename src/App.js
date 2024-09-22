import { useState } from "react";
import "./App.css";

function App() {
      let[bill,setbill]=useState(0)
      let[tipvalue,settip]=useState("10")
      let[tip,finaltip]=useState("")
      
      function calculatetip()
      {
        let calculatedtip=(bill/100)*tipvalue
        finaltip(calculatedtip)
      }

  return (
     <div>
      <h1>Tip Calculator</h1>
      <label>Enter the Bill Amount</label>
      <input value={bill} type="number" onChange={(e)=>setbill(e.target.value)}></input>
      <select value={tipvalue} onChange={(e)=>settip(e.target.value)}>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
      </select>
      <button onClick={calculatetip}>Convert</button>
      <h2>Tip is :{tip}</h2>
     </div>
  );
}

export default App;
