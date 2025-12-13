
function App() {
   var value = 7
  const addValue = ()=>{
    value = value +1
  }
  const subtractValue = ()=>{
    value = value-1
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
