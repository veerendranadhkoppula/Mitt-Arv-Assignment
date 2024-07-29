import React from 'react';

const TaskCard = ({ task, handleDragStart, column }) => {
  return (
    <div
      className="task-card"
      draggable
      onDragStart={(event) => handleDragStart(event, task, column)}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
