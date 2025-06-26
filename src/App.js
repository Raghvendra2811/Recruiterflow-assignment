import { useState, useEffect } from 'react';
import './App.css';
import TaskCard from './components/TaskCard';
import AddTaskForm from './components/AddTaskForm.js';

const API_URL = 'https://685c284889952852c2dc72f4.mockapi.io/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const addTask = async (newTask={}) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
      });

      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      const createdTask = await response.json();

      setTasks(prevTasks => [
        createdTask,
        ...prevTasks
      ]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Task Manager</h1>
        <AddTaskForm onAddTask={addTask} />
      </header>
      <main>
        {isLoading ? (
          <div className="loading">Loading tasks...</div>
        ) : (
          <div className="task-grid">
            {tasks.map(task => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onDelete={deleteTask} 
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
