import React from "react";
import "./mainpage.css";

const TaskBoard = () => {
  return (
    <div className="taskBoard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Board</h2>
        <ul>
          <li>Task</li>
          <li>Projects</li>
          <li>Collaboration</li>
          <li>Reports</li>
          <li>Payments</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header>
          <h1>Task Management Board</h1>
          <div className="search-filter">
            <input type="text" placeholder="Search tasks..." />
            <button>Filter</button>
          </div>
        </header>

        {/* Task Columns */}
        <section className="task-container">
          {/* TO-DO Column */}
          <div className="task-column to-do">
            <h3>TO-DO</h3>
            <div className="task high">
              <span className="task-title">Branding</span>
              <span className="task-priority">HIGH</span>
            </div>
          </div>

          {/* PROGRESS Column */}
          <div className="task-column-progress">
            <h3 >PROGRESS</h3>
            <div className="task-medium">
              <span className="task-title">Printing</span>
              <span className="task-priority">MEDIUM</span>
            </div>
          </div>

          {/* COMPLETED Column */}
          <div className="task-column completed">
            <h3>COMPLETED</h3>
            <div className="task average">
              <span className="task-title">Boarding</span>
              <span className="task-priority">AVERAGE</span>
            </div>
          </div>

          {/* OVERDUE Column */}
          <div className="task-column overdue">
            <h3>OVERDUE</h3>
            <div className="task empty-task">No tasks overdue</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TaskBoard;
