import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBox from './components/SearchBox';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.title === currentTask.title ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setIsEditing(false);
    setCurrentTask(null);
  };
  const startEditing = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };
  const deleteTask = (task) => {
    const filteredTasks = tasks.filter(t => t.title !== task.title);
    setTasks(filteredTasks);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Todo List</h1>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TodoForm addTask={addTask} editTask={editTask} isEditing={isEditing} currentTask={currentTask} />
      <TodoList tasks={filteredTasks} startEditing={startEditing} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
