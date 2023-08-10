import { useContext } from "react";
import { Task } from "./Task"
import { taskListContext } from "../pages/TareasPage";

export function TaskList() {
    const { taskList, setTaskList, deleteAll } = useContext(taskListContext);

    return (
        <div>
            <div className="taskList">
                {taskList.map((task) => (
                    <div key={task.id}>
                        <Task task={task}  />
                    </div>
                ))}
            </div>
            <div className="pendingClean">
                <label htmlFor="">Tiene {taskList.length} tarea(s) pendiente(s) </label>
                <button id="cleanAllBttn" onClick={() => deleteAll(setTaskList)}>Limpiar todo</button>
            </div>
        </div>
    );
};