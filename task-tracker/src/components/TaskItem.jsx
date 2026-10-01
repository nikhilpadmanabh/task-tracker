function TaskItem(props) {
  return (
    <div className="flex justify-between p-3 border rounded">
       <h2>Name: {props.name}</h2>
      <p>Status: {props.status}</p>
    </div>
  )
}

export default TaskItem