import { useState } from 'react'

function App() {

  let [count, setCount] = useState(0)
  const addValue = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <p>the maximum count is 10 and minimum is -10</p>
      <button onClick={addValue}>Increment</button>
      <button onClick={subValue}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App
