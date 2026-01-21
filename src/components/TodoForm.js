import React, { useEffect, useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTask,editTask, isEditing, currentTask}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEditing && currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [isEditing, currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editTask({ title, description });
    } else {
      addTask({ title, description });
    }
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="input-title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className="input-description"
      />
      <button type="submit" className="btn-submit"> {isEditing ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TodoForm;
