import React,{useState} from "react";
import Input from "./Component/Input";
import Output from "./Component/Output";
import './Component/Input.css';
import './Component/Output.css'

function App() {

  const [sendToOutput,setOutput]=useState("");

  const recvInput=(inputData)=>{
    setOutput(inputData);
  }

  return (
    <div className="App">
      <Input  get={recvInput}/>
      <Output data={sendToOutput}/>
    </div>
  );
}

export default App;
