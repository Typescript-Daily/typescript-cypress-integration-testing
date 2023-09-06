import React, { useState, useEffect } from 'react';
import './App.css';
import localStorageManager from './utils/localstorage-manager';

const App: React.FC = () => {
  // Initialize tasks from local storage (or an empty array if not found)
  const initialTasks: string[] = localStorageManager.getItem<string[]>('tasks') || [];

  const [tasks, setTasks] = useState<string[]>(initialTasks);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    // Save tasks to local storage whenever the tasks state changes
    localStorageManager.setItem('tasks', tasks);
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const removeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
