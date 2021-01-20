import React from 'react';
import task from '../../images/icons/task.png';
const Task = () => {
  return (
    <div className="task dashboard-card">
      <div className="icon-wrapper">
        <img src={task} alt="Task" />
      </div>
      <h3>Assignment</h3>
    </div>
  );
};

export default Task;
