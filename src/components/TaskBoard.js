import React, { useState } from 'react';
import TaskColumn from './TaskColumn';

const initialTasks = {
  todo: [
    { id: 1, title: 'Task 1', description: 'Description for task 1' },
    { id: 2, title: 'Task 2', description: 'Description for task 2' },
  ],
  inProgress: [],
  peerReview: [],
  done: [],
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDragStart = (event, task, column) => {
    event.dataTransfer.setData('task', JSON.stringify({ task, column }));
  };

  const handleDrop = (event, newColumn) => {
    const { task, column } = JSON.parse(event.dataTransfer.getData('task'));
    const newTasks = { ...tasks };
    newTasks[column] = newTasks[column].filter(t => t.id !== task.id);
    newTasks[newColumn] = [...newTasks[newColumn], task];
    setTasks(newTasks);
  };

  const filteredTasks = {};
  for (let column in tasks) {
    filteredTasks[column] = tasks[column].filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="task-board">
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="columns">
        <TaskColumn
          title="To Do"
          tasks={filteredTasks.todo}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          column="todo"
        />
        <TaskColumn
          title="In Progress"
          tasks={filteredTasks.inProgress}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          column="inProgress"
        />
        <TaskColumn
          title="Peer Review"
          tasks={filteredTasks.peerReview}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          column="peerReview"
        />
        <TaskColumn
          title="Done"
          tasks={filteredTasks.done}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          column="done"
        />
      </div>
    </div>
  );
};

export default TaskBoard;
