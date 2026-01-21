import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, startEditing, deleteTask }) => {

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          startEditing={startEditing}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
