function TodoItem (taskText){
    const { currentTask } = taskText;

    return (
    <div id="taskBox">
        <div>
            <input type="checkbox" />
            <label htmlFor="checkbox" id="text">{ currentTask } </label>
        </div>
        <div>
            <button className="actionButton">✏️</button>
            <button className="actionButton">🗑️</button>
        </div>
    </div>
    );
}
export default TodoItem;