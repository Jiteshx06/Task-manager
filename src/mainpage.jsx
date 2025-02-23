import React from "react";
import "./mainpage.css";

const TaskBoard = () => {
  return (
    <div className="taskBoard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Board</h2>
        <ul>
          <li>Task</li>
          <li>Projects</li>
          <li>Collaboration</li>
          <li>Reports</li>
          <li>Payments</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <header>
          <h1>Task Management Board</h1>
          <input type="text" placeholder="Search" />
          <button>Filter</button>
        </header>

        {/* Task Columns */}
        <div className="task-container">
          <div className="task-column to-do">
            <h3>TO-DO</h3>
            <div className="task high">HIGH<br />BRANDING</div>
          </div>
          <div className="task-column progress">
            <h3>PROGRESS</h3>
            <div className="task medium">MEDIUM<br />PRINTING</div>
          </div>
          <div className="task-column completed">
            <h3>COMPLETED</h3>
            <div className="task average">AVERAGE<br />BOARDING</div>
          </div>
          <div className="task-column overdue">
            <h3>OVERDUE</h3>
            <div className="task">No tasks overdue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
