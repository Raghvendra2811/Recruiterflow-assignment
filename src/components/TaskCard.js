import { useState } from "react";
import "../styles/TaskCard.css";

const TaskCard = ({ task, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    onDelete(task.id);
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return { backgroundColor: "rgba(231, 76, 60, 0.25)", color: "#ff7675" };
      case "medium":
        return {
          backgroundColor: "rgba(241, 196, 15, 0.25)",
          color: "#ffeaa7",
        };
      case "low":
        return {
          backgroundColor: "rgba(46, 204, 113, 0.25)",
          color: "#55efc4",
        };
      default:
        return {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#ffffff",
        };
    }
  };

  return (
    <div className={`task-card ${isDeleting ? "deleting" : ""}`}>
      <div className="task-header">
        <h3>{task.title}</h3>
        <span
          className="priority"
          style={getPriorityColor(task.priority)}
          data-priority={task.priority}
        >
          {task.priority}
        </span>
      </div>
      <p className="task-description">{task.description}</p>
      <div className="task-footer">
        <span className="task-date">{formatDate(task.created_at)}</span>
        <button
          className="delete-btn"
          onClick={handleDelete}
          aria-label="Delete task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
