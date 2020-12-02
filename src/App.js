import React, {useState} from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const handleNewTask = (task) => setTasks([...tasks, task]);
  return (
    <div>
      <TaskInput onSubmit={handleNewTask}/>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
