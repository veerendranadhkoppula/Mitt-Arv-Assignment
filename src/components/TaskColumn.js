import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, handleDragStart, handleDrop, column }) => {
  const onDrop = (event) => {
    event.preventDefault();
    handleDrop(event, column);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="task-column" onDrop={onDrop} onDragOver={onDragOver}>
      <h2>{title}</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} handleDragStart={handleDragStart} column={column} />
      ))}
    </div>
  );
};

export default TaskColumn;
