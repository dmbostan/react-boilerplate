import { useState } from 'react'
import './App.css'
import Logos from "@molecules/Logos/Logos.tsx";
import Paragraph from "@atoms/Paragraph/Paragraph.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logos />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Paragraph>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Paragraph>
      </div>
      <Paragraph className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Paragraph>
    </>
  )
}

export default App
