import { createContext, useEffect } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { useCRUD } from './hooks/useCRUD';
import "./app.css";
import { taskContext } from './contexts/taskContext';
// import { taskListContext } from './contexts/taskListContext';

export const taskListContext = createContext(taskContext);

function App() {
  const { taskList } = useCRUD();

  useEffect(() => {
    localStorage.setItem("taskListArray", JSON.stringify(taskList))
  }, [taskList])
  
  return (
    <div className='body'>
      <taskListContext.Provider value={taskContext}>
        <Header />
        <TaskList />
      </taskListContext.Provider>
    </div>
  );
};

export default App;
