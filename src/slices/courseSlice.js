import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCourses, addCourse } from '../services/api';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await getCourses();
  return response;
});

export const createCourse = createAsyncThunk('courses/createCourse', async (courseData) => {
  const response = await addCourse(courseData);
  return response;
});

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      });
  },
});

export default courseSlice.reducer;
