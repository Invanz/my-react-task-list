import { Header } from './components/Header';
import { TaskList } from './components/TaskList'
import "./app.css";

function App() {

  const taskArray = [{
    title: "Task 1",
    description: "This is a task"
  },
  {
    title: "Task 2",
    description: "This is a task"
  },
  {
    title: "Task 3",
    description: "This is a task"
  }];

  let newTitle= "";

  const onHandleChange = (title) => {
    newTitle=title;
  };

  const onHandleClick = () =>{
    taskArray.unshift({
      title: newTitle,
      description: "This is a new task"
    })
  };

  const onHandleDelete = () =>{
    taskArray.forEach(() =>{
      taskArray.pop();
    })
    taskArray.pop();
  }

  return (
    <div className='body'>
        <Header name="TO-DO App" />
        <TaskList list={taskArray} onHandleChange={onHandleChange} onHandleClick={onHandleClick} onHandleDelete={onHandleDelete}/>
    </div>
    );
}

export default App
