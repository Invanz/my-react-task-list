import { Task } from "./Task"

export function TaskList(props){
    const { list, onHandleChange, onHandleClick, onHandleDelete } = props;

    const handleChange = (e) =>{
        onHandleChange(e.target.value);
    }
    const handleClick = () =>{
        onHandleClick();
    }

    const handleDelete = () => {
        onHandleDelete()
    }

    return (
        <div>
            <div className="newTask">
                <h3>Nueva tarea:</h3>
                <input type="text" onChange={handleChange}/>
                <button onClick={handleClick}>+</button>
            </div>
            <div className="taskList">
                {list.map((task) => (
                    <div>
                        <Task currentTask={task.title} currentDescription={task.description} />
                    </div>
                ))}
            </div>
            <div className="pendingClean">
                <label htmlFor="">Tiene {list.length} tareas pendientes </label>
                <button id="cleanAllBttn" onClick={handleDelete}>Limpiar todo</button>
            </div>
        </div>
    );
};