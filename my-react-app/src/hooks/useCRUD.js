import { taskContext } from "../taskContext";
import { useState } from "react";

export const useCRUD = () => {

    const [taskList, setTaskList] = useState([]);

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
        taskList: taskList,
        createTask: createTask,
        deleteTask: deleteTask,
        updateTask: updateTask,
        deleteAll: deleteAll,
    }
}