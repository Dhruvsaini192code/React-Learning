import { useState } from 'react'

function App() {
  const [color, setColor] = useState('lightblue')

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: color }}
    >
      {/* Container */}
      <div className="flex flex-col items-center gap-6 bg-white p-6 rounded-xl shadow-md max-w-[90%]">
        
        <p className="text-lg font-bold">Background Changer</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            className="px-4 py-2 bg-blue-400 text-white rounded-lg"
            onClick={() => setColor("lightblue")}
          >
            LightBlue
          </button>

          <button
            className="px-4 py-2 bg-green-400 text-white rounded-lg"
            onClick={() => setColor("lightgreen")}
          >
            LightGreen
          </button>

          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg"
            onClick={() => setColor("lightyellow")}
          >
            LightYellow
          </button>

          <button
            className="px-4 py-2 bg-pink-400 text-white rounded-lg"
            onClick={() => setColor("lightpink")}
          >
            LightPink
          </button>
        </div>

      </div>
    </div>
  )
}

export default App