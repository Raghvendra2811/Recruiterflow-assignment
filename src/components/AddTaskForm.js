import { useState } from "react";
import "../styles/AddTaskForm.css";

const AddTaskForm = ({ onAddTask }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onAddTask(formData);

    // Reset form
    setFormData({
      title: "",
      description: "",
      priority: "Low",
    });

    setIsFormVisible(false);
  };

  return (
    <div className="add-task-container">
      <button
        className="add-task-button"
        onClick={() => setIsFormVisible(true)}
        aria-label="Add new task"
      >
        + Add Card
      </button>

      {isFormVisible && (
        <div className="add-task-form-wrapper">
          <div className="add-task-form">
            <h2>Add New Task</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Task title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Task description"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsFormVisible(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-button">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;
