import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice'; // Import the task slice reducer

// Configure the store
const store = configureStore({
  reducer: {
    tasks: taskReducer, // Add the task reducer to the store
  },
});

export default store;
