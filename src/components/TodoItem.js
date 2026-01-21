import React from 'react';

const TodoItem = ({ task, startEditing, deleteTask }) => {
  console.log("task",task)
  return (
    <div className="todo-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => startEditing(task)}>Edit</button>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
};

export default TodoItem;
