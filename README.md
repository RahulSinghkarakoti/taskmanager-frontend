 
# Task Manager (Frontend)

## Description
The Task Manager frontend is a modern web application built using React, Vite, TypeScript, and Redux. It provides an intuitive user interface to manage tasks efficiently. Users can add, edit, delete, mark tasks as completed, and filter tasks based on their status. The frontend communicates with the backend to handle task operations, and state management is handled by Redux.

## Installation Instructions

To set up the Task Manager frontend locally, follow these steps:

### Prerequisites
- Node.js (v16 or higher)
- npm (Node package manager)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RahulSinghkarakoti/taskmanager-frontend.git
   cd taskmanager-frontend
   ```

2. **Install dependencies**:
   Run the following command to install the required Node.js packages:
   ```bash
   npm install
   ```

3. **Run the development server**:
   Start the Vite development server to view the app locally:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

4. **Build for Production**:
   To build the app for production, run:
   ```bash
   npm run build
   ```

## Usage

- **Add a Task**: Users can add a new task by entering the task title, description, and deadline.
- **Edit a Task**: Modify existing tasks by clicking the edit icon and updating the details.
- **Delete a Task**: Remove tasks by clicking the delete icon next to the task.
- **Mark as Completed**: Mark tasks as completed to track finished work.
- **Filter Tasks**: Filter tasks based on their completion status (All, Completed, Pending).

### State Management with Redux
The application uses Redux to manage the global state. Actions and reducers are set up to handle task-related operations, such as adding, updating, and deleting tasks.

### Directory Structure
```
/src
  /components    - Reusable UI components
  /store         - Redux store, actions, and reducers
  /pages         - Different pages of the app
  /api           - API calls to the backend
  App.tsx        - Root component
  index.tsx      - Application entry point
```

## Technologies Used
- **React** - JavaScript library for building user interfaces.
- **Vite** - Build tool for faster development and bundling.
- **TypeScript** - A typed superset of JavaScript.
- **Redux** - State management library for handling global state.
- **React Router** - For managing routes and navigation.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
 