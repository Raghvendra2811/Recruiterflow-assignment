import { useState, useEffect } from 'react';
import './App.css';
import TaskCard from './components/TaskCard';
import AddTaskForm from './components/AddTaskForm.js';


function App() {
  const [tasks, setTasks] = useState([
  {
    "created_at": 1750879541,
    "title": "title 14",
    "description": "description 14",
    "priority": "priority 14",
    "id": "14"
  },
  {
    "created_at": 1750879481,
    "title": "title 15",
    "description": "description 15",
    "priority": "priority 15",
    "id": "15"
  },
  {
    "created_at": 1750879421,
    "title": "title 16",
    "description": "description 16",
    "priority": "priority 16",
    "id": "16"
  },
  {
    "created_at": 1750879361,
    "title": "title 17",
    "description": "description 17",
    "priority": "priority 17",
    "id": "17"
  },
  {
    "created_at": 1750879301,
    "title": "title 18",
    "description": "description 18",
    "priority": "priority 18",
    "id": "18"
  },
  {
    "created_at": 1750879241,
    "title": "title 19",
    "description": "description 19",
    "priority": "priority 19",
    "id": "19"
  },
  {
    "created_at": 1750879181,
    "title": "title 20",
    "description": "description 20",
    "priority": "priority 20",
    "id": "20"
  },
  {
    "created_at": 1750879121,
    "title": "title 21",
    "description": "description 21",
    "priority": "priority 21",
    "id": "21"
  },
  {
    "created_at": 1750881382,
    "title": "title 22",
    "description": "description 22",
    "priority": "priority 22",
    "id": "22"
  },
  {
    "created_at": 1750881324,
    "title": "title 23",
    "description": "description 23",
    "priority": "priority 23",
    "id": "23"
  },
  {
    "created_at": 1750889242,
    "title": "title 10",
    "description": "description 10",
    "priority": "low",
    "id": "24"
  },
  {
    "created_at": 1750889199,
    "title": "title 10",
    "description": "description 10",
    "priority": "Medium",
    "id": "25"
  },
  {
    "created_at": 1750889143,
    "title": "title 10",
    "description": "description 10",
    "priority": "Low",
    "id": "26"
  },
  {
    "created_at": 1750890262,
    "title": "tgvgbjhbjhbh",
    "description": "hjbubhubuybhvgjvuyv",
    "priority": "Medium",
    "id": "28"
  },
  {
    "created_at": 1750890219,
    "title": "bhjjhbjb",
    "description": "bhhuyby",
    "priority": "Low",
    "id": "29"
  },
  {
    "created_at": 1750890614,
    "title": "this is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge title",
    "description": "this is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge titlethis is thge title",
    "priority": "High",
    "id": "30"
  }
]);
  const [isLoading, setIsLoading] = useState(false);

 
  return (
    <div className="app-container">
      <header>
        <h1>Task Manager</h1>
        <AddTaskForm  />
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
                
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
