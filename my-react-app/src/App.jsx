import Header from './components/Header';
import TaskList from './components/TaskList'

function App() {
  return (
    <div>
      <div>
        <Header name="TO-DO App" />
      </div>
      <div>
        <TaskList />
      </div>
    </div>
    );
}

export default App
