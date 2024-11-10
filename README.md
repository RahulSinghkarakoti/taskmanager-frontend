
# Task Manager

## Description
Task Manager is a simple yet powerful web application designed to help users efficiently manage and track their tasks. It allows users to add, edit, delete, and categorize tasks, as well as mark tasks as completed. The project also includes a cron job for marking expired tasks automatically.

## Installation Instructions

To get the Task Manager project up and running locally, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (or use MongoDB Atlas)
- npm (Node package manager)

### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd task-manager
   ```

2. **Install dependencies**:
   Run the following command to install the required Node.js packages:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGO_URI=<your-mongo-db-connection-string>
   CORS_ORIGIN=<your domain or ip>
   PORT=8000 or any
   ```

4. **Start the development server**:
   Run the application in development mode:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:5000`.

5. **Run Cron Jobs**:
   The cron job for marking expired tasks can be started by running:
   ```bash
   npm run cron
   ```

## Usage

- **Add a Task**: Create a new task by filling in the task title, description, and deadline.
- **Edit a Task**: Modify an existing task's details.
- **Delete a Task**: Remove tasks that are no longer needed.
- **Mark as Completed**: Mark tasks as completed once done.
- **Task Expiry**: Expired tasks will be automatically marked by the cron job.

### API Endpoints
- `POST /tasks` - Add a new task.
- `GET /tasks` - Get all tasks.
- `GET /tasks/:id` - Get a single task by its ID.
- `PUT /tasks/:id` - Update a task.
- `DELETE /tasks/:id` - Delete a task.
- `PATCH /tasks/:id/complete` - Mark a task as completed.
