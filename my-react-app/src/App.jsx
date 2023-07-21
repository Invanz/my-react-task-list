import { createContext, useEffect } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { useCRUD } from './hooks/useCRUD';
import "./app.css";

export const taskListContext = createContext([]);

function App() {
  const {taskList} = useCRUD();

  useEffect(() => {
    localStorage.setItem("taskListArray", JSON.stringify(taskList))
  }, [taskList])
  
  return (
    <div className='body'>
      <taskListContext.Provider value={taskList}>
        <Header />
        <TaskList />
      </taskListContext.Provider>
    </div>
  );
};

export default App;
