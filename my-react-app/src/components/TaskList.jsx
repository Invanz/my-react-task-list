import { useContext } from "react";
import { Task } from "./Task"
import { taskListContext } from "../App";
import { useCRUD } from "../hooks/useCRUD";

export function TaskList() {
    const taskListArray = useContext(taskListContext);
    const { deleteAll } = useCRUD();

    return (
        <div>
            <div className="taskList">
                {taskListArray.map((task) => (
                    <div key={task.id}>
                        <Task task={task}  />
                    </div>
                ))}
            </div>
            <div className="pendingClean">
                <label htmlFor="">Tiene {taskListArray.length} tarea(s) pendiente(s) </label>
                <button id="cleanAllBttn" onClick={() => deleteAll()}>Limpiar todo</button>
            </div>
        </div>
    );
};