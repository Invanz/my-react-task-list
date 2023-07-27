import { useContext, useReducer, useState } from "react";
import { useCRUD } from "../hooks/useCRUD";
import { taskListContext } from "../App";
import { v4 as uuid } from 'uuid';

export function Header() {
    const { taskList, setTaskList, createTask} = useContext(taskListContext);

    const [titleError, setTittleError] = useState(undefined);

    const reducer = (state, action) => {
        switch (action.type) {
            case "title":
                return {
                    ...state,
                    taskTitle: action.payload
                }
            case "description":
                return {
                    ...state,
                    taskDescription: action.payload
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, { taskTitle: "", taskDescription: "" })

    const handleTaskTitle = (e) => {
        const titleValue = e.target.value.length;
        setTittleError(titleValue == 0 ? undefined : titleValue < 4 ? "El título debe ser mayor a 3 caracteres." : ""); 
    }

    const isValidTask= titleError == "" ? true : false;

    return (
        <>
            <nav>
                <div className="header">
                    <h1>TODO APP</h1>
                </div>
            </nav>
            <div className="newTask">
                <h3>Nueva tarea:</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createTask({
                        id: uuid(),
                        task: state.taskTitle,
                        description: state.taskDescription,
                        done: false,
                    }, taskList, setTaskList);
                    dispatch({type: "title", payload: ""});
                    dispatch({type: "description", payload: ""});
                }}>
                    <input placeholder="Título" type="text" onInput={
                        (e) => {
                            dispatch({ type: "title", payload: e.target.value });
                            handleTaskTitle(e);
                        }

                        } value={state.taskTitle} />
                        {titleError && <p style={{color: "red"}}>{titleError}</p>}
                    <br />
                    <input placeholder="Descripción" type="text" onInput={(e) => dispatch({ type: "description", payload: e.target.value })} value={state.taskDescription} />
                    <button type="submit" disabled={!isValidTask}>➕</button>
                </form>
            </div></>
    );
};