import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [Length , setLength] = useState(8)
  const [NumberAllowed, setNumbersAllowed] = useState(false)
  const [SymbolsAllowed, setSymbolsAllowed] = useState(false)
  const [Password , setPassword] = useState("")
  const passwordRef = useRef(null)
  const PasswordGenerator = useCallback(()=>{
    let Pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"
    let symbols = "!@#$%^&*(){}[]"
    if(NumberAllowed){
      str += number
    }
    if(SymbolsAllowed){
      str += symbols
    }
    for(let i = 1 ; i <= Length ; i++){
      let char = str.charAt(Math.floor(Math.random()*str.length + 1))
      Pass += char
    }
     setPassword(Pass)
  }, [Length,NumberAllowed,SymbolsAllowed, setPassword] )
  const copyPastedToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(Password)
    alert("password copied")
  },[Password])
  useEffect(()=>{PasswordGenerator()},[Length ,NumberAllowed,SymbolsAllowed,PasswordGenerator])
  return (
   <>
  <div className="min-h-screen w-full flex justify-center items-start bg-zinc-900 pt-12">
  <div className="bg-gray-700 text-white px-8 py-6 rounded-lg max-w-md w-full text-center ">
    <div className=' text-3xl mb-6'>
    <h1 >Password Generator</h1>
  </div>
    <div
     className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type = "text"
      value = {Password}
      className='outline-none w-full py-1 px-3'
      placeholder = "Password"
      readOnly
      ref = {passwordRef}>
      </input>
      <button
      onClick={copyPastedToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
       copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type = "range"
        min = {8}
        max = {100}
        value = {Length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
      <label className='px-2 text-xs'> Length : {Length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type ="checkbox"
        defaultChecked={NumberAllowed}
        id ="numberInput"
        onChange={()=> {
          setNumbersAllowed((prev)=> !prev);
        }}
        /><label className='px-2 text-xs'>Number</label>
      </div>
       <div className='flex items-center gap-x-1'>
        <input
        type ="checkbox"
        defaultChecked={SymbolsAllowed}
        id ="symbolInput"
        onChange={()=> {
          setSymbolsAllowed((prev)=> !prev);
        }}
        /><label className='px-2 text-xs'>Symbols</label>
      </div>
    </div>
  </div>
</div>

   </>
  );
}

export default App
