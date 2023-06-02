function TodoItem (taskText){
    const { currentTask } = taskText;

    return (
    <div>
        <input type="checkbox" />
        <label htmlFor="">{ currentTask } </label>
        <button>Editar</button>
        <button>Eliminar</button>
    </div>
    );
}
export default TodoItem;