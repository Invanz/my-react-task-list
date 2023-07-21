
export const taskContext= () => {
    if (localStorage.getItem("taskListArray")) {
      return setTaskList(JSON.parse(localStorage.getItem("taskListArray")));
    };
    return [{
      id: 0,
      task: "Tarea de prueba",
      description: "Aquí puede ir la descripción de tu tarea",
      done: false,
    }];
  };