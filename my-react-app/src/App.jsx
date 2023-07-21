import { useState, createContext, useReducer } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { taskContext } from './taskContext';
import "./app.css";

export const taskListContext = createContext([]);

function App() {

  const [taskList, setTaskList] = useState(taskContext)
  
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
