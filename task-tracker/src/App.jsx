import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
  { id: 1, name: "Fill the worklogs", status: "finished" },
  { id: 2, name: "Learn React", status: "not finished" },
  { id: 3, name: "Go through the KSS Documents", status: "not finished" },
  { id: 4, name: "Update in the slack channel", status: "finished" },
])

const addTask = (task) =>{ 
  const newTask = {
    id: Date.now(),
    name: task,
    status: "not finished"
  }
  setTasks([...tasks, newTask])
}
const toggleTask = (id) => {  //writing this function here as setTasks scope is only in this file, and this file is not being called anywhere else for now
setTasks(tasks.map((task) =>
  { return (id === task.id)? {...task, status: (task.status === "not finished") ? "finished": "not finished"}: task}
 )
)
}

const deleteTask = (id) => {  
setTasks(tasks.filter((task) => id !== task.id))
}

  return (
    <div className="max-w-xl mx-auto p-6">
      <Header />
      
      <button onClick={() => setShowForm(true) } className='border p-1'>
        Add Task
      </button>

      {showForm && (<AddTaskForm addTask={addTask} closeForm={() => setShowForm(false)}/> )}
      <TaskList tasks={tasks} toggleTask = {toggleTask} deleteTask = {deleteTask}/>
      
    </div>
  )
}

export default App
