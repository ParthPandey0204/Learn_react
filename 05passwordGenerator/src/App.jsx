import { useState } from 'react'


function App() {
  const [Length , setLength] = useState(8)
  const [NumberAllowed, setNumbersAllowed] = useState(false)
  const [SymbolsAllowed, setSymbolsAllowed] = useState(false)
  const [Password , setPassword] = useState("")
  return (
   <>
      <div className="min-h-screen w-full flex justify-center bg-zinc-900">
      <h1 className="text-white text-4xl p-4">
        Password Generator
      </h1>
    </div>

   </>
  );
}

export default App
