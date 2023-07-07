import Header from './components/Header';
import TaskList from './components/TaskList'
import './app.css'

function App() {
  return (
    <div id='webpage'>
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
