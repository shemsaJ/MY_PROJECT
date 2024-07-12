import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import studentReducer from '../slices/studentSlice';
import courseReducer from '../slices/courseSlice';
import gradeReducer from '../slices/gradeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentReducer,
    courses: courseReducer,
    grades: gradeReducer,
  },
});

export default store;
