import { useState } from 'react'

function AddTaskForm({addTask, closeForm}){
    const [name, setName] = useState("");
    const submitHandle = (e)=>{
        e.preventDefault(); 
        addTask(name);
        setName("");
    };
    
    return (
        <form onSubmit={submitHandle} className="form-container flex gap-2">
            <input type="text" placeholder="Task Name" required pattern=".*\S+.*" onChange={(e) => setName(e.target.value)} value={name} className='border p-1'/>
            <button type="submit" className='p-1 bg-green-500 text-white'>Add</button>
            <button type = "button" className='p-1 bg-gray-300' onClick={closeForm}>Cancel</button>
        </form>

    )
}

export default AddTaskForm