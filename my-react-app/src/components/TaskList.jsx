import Task from "./Task"

function TaskList(){

    return (
        <div>
            <div>
                <h3>Nueva tarea:</h3>
                <input type="text" />
                <button>+</button>
            </div>
            <div>
                <Task currentTask="Lavar los platos" />
                <Task currentTask="Sacar al perro" />
                <Task currentTask="Tratar de dominar al mundo" />
                <Task currentTask="Aprender React" />
                <Task currentTask="Desatrasarme" />
                <Task currentTask="Ir a clase" />
            </div>
            <div>
                <label htmlFor="">Tiene tareas pendientes </label>
                <button id="cleanAllBttn">Limpiar todo</button>
            </div>
        </div>
    );
}

export default TaskList