# Task Manager App

A modern task manager application built with React. This application allows users to view, add, and delete tasks with a beautiful, responsive UI featuring animations and transitions.

## Features

- **Task Cards**: Display tasks in visually appealing cards
- **Add New Tasks**: Create new tasks with title, description, and priority levels
- **Delete Tasks**: Remove tasks with smooth animation
- **API Integration**: Uses a mock API for CRUD operations
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Animations**: Smooth transitions for adding/deleting tasks
- **Dark Theme**: Modern gradient dark theme with beautiful UI elements

## Tech Stack

- React.js with Hooks
- CSS with animations and transitions
- API integration with fetch
- Modern ES6+ JavaScript
- Responsive design with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   ```

2. Navigate to the project directory
   ```bash
   cd task-manager-app
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── TaskCard.js       # Task card component
│   └── AddTaskForm.js    # Form for adding new tasks
├── styles/               # CSS stylesheets
│   ├── TaskCard.css      # Styling for task cards
│   └── AddTaskForm.css   # Styling for the add task form
├── App.js                # Main application component
├── App.css               # Main application styles
├── index.js              # Entry point
└── index.css             # Global styles
```

## API Integration

The app uses a mock API from MockAPI for CRUD operations:
- `GET /tasks` - Retrieve all tasks
- `POST /tasks` - Create a new task
- `DELETE /tasks/:id` - Delete a task by ID

## Deployment

To build the project for production:

```bash
npm run build
```

This will create an optimized build in the `build` folder which can be deployed to any static hosting service.

## License

This project is open source and available under the MIT license.
