
import '../styles/AddTaskForm.css';

const AddTaskForm = ({ onAddTask }) => {


  return (
    <div className="add-task-container">
      <button 
        className="add-task-button"
        aria-label="Add new task"
      >
        + Add Card
      </button>
    </div>
  );
};

export default AddTaskForm; 