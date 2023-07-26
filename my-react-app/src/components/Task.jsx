import { useContext, useState } from "react";
import { taskListContext } from "../App";

export function Task(props) {

    const { task } = props;
    const [edit, setEdit] = useState(false);
    const [ newTitle, setNewTitle ] = useState(task.task);
    const [ newDescription, setNewDescription] = useState(task.description)
    const { taskList, setTaskList, deleteTask, updateTask } = useContext(taskListContext);

    if (edit) {
        return (
            <div className="task">
                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                <button onClick={() => {
                    updateTask(task, newTitle, newDescription, taskList, setTaskList)
                    setEdit(false);
                }}>✔️</button>
                <button onClick={() => {
                    setEdit(false);
                    setNewTitle(task.task);
                    setNewDescription(task.description)
                }}>✖️</button><br />
                <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
            </div>
        )
    }
    return (
        <div className="task">
            <input type="radio" />
            <label htmlFor="">{task.task} </label>
            <button onClick={() => {
                setEdit(true);
            }}>✏️</button>
            <button onClick={() => deleteTask(task, taskList, setTaskList)}>🗑️</button>
            <p>{task.description}</p>
        </div>
    );
};