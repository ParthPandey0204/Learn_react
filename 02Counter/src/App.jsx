import { useState } from "react";

function App() {
   let [value , setValue] = useState(7)
  const addValue = ()=>{
    setValue(prev => prev+1) 
   }
  const subtractValue = ()=>{
    if(value >= 1){
    setValue(prev => prev-1)
    }
  }

  return (
    <>
    <h1>This is just for fun</h1>
    <h2>Counter: {value}</h2>
    <button 
    onClick={addValue}
    >Add Value</button><br/>
    <button
    onClick={subtractValue}
    >Subtract Value</button>
    </>
  )
}

export default App
