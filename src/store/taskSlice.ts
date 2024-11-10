import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of each task
interface Task {
  title: string;
  description: string;
  deadline: string;  
}

// Define the structure of a group of tasks by status
interface TaskGroup {
  _id: string;  
  tasks: Task[];
  count: number;
}

// Define the initial state structure for the slice
interface TaskState {
  groupedTasks: TaskGroup[];  // This will hold the grouped tasks
  loading: boolean;  // To manage loading state
  error: string | null;  // To handle errors
}

// Define the initial state
const initialState: TaskState = {
  groupedTasks: [],
  loading: false,
  error: null,
};

// Create the slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Action to set the tasks data
    setGroupedTasks: (state, action: PayloadAction<TaskGroup[]>) => {
      state.groupedTasks = action.payload;
    },
    // Action to set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    // Action to handle error
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Export the actions
export const { setGroupedTasks, setLoading, setError } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;
