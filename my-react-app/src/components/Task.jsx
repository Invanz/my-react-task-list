import { useContext, useEffect, useState } from "react";

export function Task(props) {

    const { task } = props;
    const [edit, setEdit] = useState(false)

    if (edit) {
        return (
            <div className="task">
                <input type="text" />
                <button onClick={() => {
                    setEdit(false);
                }}>✔️</button>
                <button onClick={() => {
                    setEdit(false);
                }}>✖️</button><br />
                <input type="text" onChange={(e) => e.target.value} />
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
            <button>🗑️</button>
            <p>{task.description}</p>
        </div>
    );
};