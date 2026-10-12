function TaskItem(props) {
  return (
    <div className="flex justify-between p-3 border rounded">
       <h2>Name: {props.name}</h2>
      <button onClick={() => props.toggleTask(props.id)} className={`text-base ${(props.status === "finished") ? "line-through" : ""}`}>Status: {props.status}</button>
      <button onClick={() => props.deleteTask(props.id)} className="p-1 bg-red-600 text-white">Delete Task</button>
    </div>
  )
}

export default TaskItem