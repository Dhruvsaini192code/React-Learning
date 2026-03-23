import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App()  {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass =""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(includeNumbers) string += "1234567890"
    if(includeSymbols) string += "~!@#$%^&*()-_`{}[];:'?/|"
    for(let i = 1; i <= length ; i++)
    {
      let char = Math.floor(Math.random() * string.length+1)
      pass += string.charAt(char)
    }
    setPassword(pass)
    }
    , [length, includeNumbers, includeSymbols])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {
      passwordGenerator()
    }, [passwordGenerator , length, includeNumbers, includeSymbols])

  return (
    <div className="h-screen w-screen flex flex-col items-center gap-5 bg-black text-white">

      <h1 className="text-3xl font-bold mt-3">Password Generator</h1>
      <input 
      type="text" 
      value={password} 
      readOnly 
      className="bg-gray-800 px-3 py-2 rounded-md text-white w-80 text-center"
      ref={passwordRef} />
      <div className="flex items-center gap-5">
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
      onChange={(e) => setLength(e.target.value)}
      />
      <label htmlFor="">Length : {length}</label>

      <input 
      type="checkbox"
      checked={includeNumbers}
      onChange={() => setIncludeNumbers(prev => !prev)}
      />
      <label htmlFor="numbers">Include Numbers</label>
      <input 
      type="checkbox"
      checked={includeSymbols}
      onChange={() => setIncludeSymbols(prev => !prev)}
      />
      <label htmlFor="symbols">Include Symbols</label>
      </div>
      <button 
      className="bg-green-500 px-3 py-2 rounded-md text-white"
      onClick={copyPasswordToClipBoard}>Copy</button>
    </div>
  );
}

export default App;