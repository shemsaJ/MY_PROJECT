import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGrades, addGrade } from '../services/api';

export const fetchGrades = createAsyncThunk('grades/fetchGrades', async () => {
  const response = await getGrades();
  return response;
});

export const createGrade = createAsyncThunk('grades/createGrade', async (gradeData) => {
  const response = await addGrade(gradeData);
  return response;
});

const gradeSlice = createSlice({
  name: 'grades',
  initialState: {
    grades: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGrades.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGrades.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.grades = action.payload;
      })
      .addCase(fetchGrades.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(createGrade.fulfilled, (state, action) => {
        state.grades.push(action.payload);
      });
  },
});

export default gradeSlice.reducer;
