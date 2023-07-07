import Task from "./Task"



function TaskList(props){

    return (
        <div>
            <div id="nuevaTarea">
                <input type="text" placeholder="Nueva tarea" id="nuevaTareaInput"/>
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
            <div id="tareasPendientes">
                <label htmlFor="">Tiene tareas pendientes </label>
                <button id="cleanAllBttn">Limpiar todo</button>
            </div>
        </div>
    );
}

export default TaskList