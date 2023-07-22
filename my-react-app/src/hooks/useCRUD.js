import { taskContext } from "../contexts/taskContext";
import { useState, useContext } from "react";

export const useCRUD = () => {
    const {taskList} = useContext(taskContext)

    // const [taskList, setTaskList] = useState(taskContext);

    const createTask = (newTask) =>  {
        console.log(taskList, newTask)
        setTaskList(...taskList, newTask);
        console.log(taskList);
    }
    const deleteTask = ({id}) => {
        setTaskList(taskList.filter((task) => id != task.id ))
    }
    const updateTask = ({id, title, description}) => {
        setTaskList(taskList.map((task) => {
            if (task.id == id){
                task.title= title;
                task.description= description;
            }
            return task;
        } ))
    }
    const deleteAll = () => {
        setTaskList([]);
    }
    return {
        taskList,
        createTask,
        deleteTask,
        updateTask,
        deleteAll,
    }
}