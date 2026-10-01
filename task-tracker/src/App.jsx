import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  const myTasks = [
  { id: 1, name: "Fill the worklogs", status: "finished" },
  { id: 2, name: "Learn React", status: "not finished" },
  { id: 3, name: "Go through the KSS Documents", status: "not finished" },
  { id: 4, name: "Update in the slack channel", status: "finished" },
]

  return (
    <div className="max-w-xl mx-auto p-6">
      <Header />
      <TaskList tasks={myTasks} />
    </div>
  )
}

export default App
