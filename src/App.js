import React from 'react';
import TaskBoard from './components/TaskBoard';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <TaskBoard />
    </div>
  );
};

export default App;
