import React, {useState} from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const handleNewTask = (task) => setTasks([...tasks, {completed: false, label: task}]);
  const handleToggleTask = (taskIdx) => {
      const newTasks = [...tasks];
      newTasks[taskIdx] = {...newTasks[taskIdx], completed: !newTasks[taskIdx].completed};
      setTasks(newTasks);
  };

    return (
        <div>
          <TaskInput onSubmit={handleNewTask}/>
          <TaskList tasks={tasks} onToggleTask={handleToggleTask}/>
        </div>
    );
}

export default App;
