import TaskItem from './TaskItem'

function TaskList(props) {
  return (
    <div className="space-y-2">
      {
            
                props.tasks.map((task) => (
                    <TaskItem key={task.id} name={task.name} status={task.status} toggleTask = {props.toggleTask} id={task.id} deleteTask = {props.deleteTask}/>
                ))
                
      }
    </div>
  )
}

export default TaskList