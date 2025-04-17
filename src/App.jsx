import { useState } from 'react'
import './App.css'
import JumiaClone from "./component/JumiaClone.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <JumiaClone />
    </div>
  )
}

export default App
