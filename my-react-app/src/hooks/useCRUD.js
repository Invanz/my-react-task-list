export const useCRUD = () => {

    const createTask = (task, setTaskList) =>  {
        setTaskList(task, ...taskList)
    }
    const deleteTask = ({id}, setTaskList) => {
        setTaskList(taskList.filter((task) => id != task.id ))
    }
    const updateTask = ({id, title, description}, setTaskList) => {
        setTaskList(taskList.map((task) => {
            if (task.id == id){
                task.title= title;
                task.description= description;
            }
        } ))
    }
};