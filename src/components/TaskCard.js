import "../styles/TaskCard.css";

const TaskCard = ({ task }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };
  return (
    <div className={`task-card  deleting" : ""}`}>
      <div className="task-header">
        <h3>{task.title}</h3>
        <span
          className="priority"
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
