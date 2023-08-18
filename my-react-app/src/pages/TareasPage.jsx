import { createContext, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { TaskList } from '../components/TaskList';
import { useCRUD } from '../hooks/useCRUD';
import "../app.css";
import { taskContext } from '../contexts/taskContext';
import { TaskListPagePractice } from '../practice/TaskListPagePractice';

export const taskListContext = createContext();

export function TareasPage() {

    const [taskList, setTaskList] = useState(taskContext())
    const { createTask, updateTask, deleteTask, deleteAll } = useCRUD();

    useEffect(() => {
        localStorage.setItem("taskListArray", JSON.stringify(taskList))
    }, [taskList])

    return (
        <div className='body'>
            <taskListContext.Provider value={{ taskList, setTaskList, createTask, updateTask, deleteTask, deleteAll }}>
                {/* <Header />
                <TaskList /> */}
                <TaskListPagePractice />
            </taskListContext.Provider>
        </div>
    );
}