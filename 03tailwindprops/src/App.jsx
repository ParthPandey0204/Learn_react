import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'   

function App() {
  const [count, setCount] = useState(0)
  let myarr = [1,2,3,4,5] 

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
       
      </h1>
      <Card username ="React1"  btntxt = "visit me" someObj = {myarr} />
      <Card username ="Reac2"  btntxt = "visit me" />
    </>
  )
}

export default App
