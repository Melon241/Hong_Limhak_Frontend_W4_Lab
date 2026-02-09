import { useState } from 'react'
import './App.css'

const StatusBadge = ({ active, onToggle }) => {
  return <button onClick={onToggle}>{active ? "Active" : "Pending"}</button>
}

function App() {
  const [isDone, setIsDone] = useState(false)

  return <StatusBadge active={isDone} onToggle={() => setIsDone(!isDone)} />
}

export default App
