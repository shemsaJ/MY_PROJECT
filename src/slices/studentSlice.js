import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registerStudent } from '../services/api';

// Async thunk for registering a student
export const registerStudentAsync = createAsyncThunk(
    'students/registerStudent',
    async (studentData, { rejectWithValue }) => {
        try {
            const response = await registerStudent(studentData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const studentSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerStudentAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerStudentAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.students.push(action.payload);
            })
            .addCase(registerStudentAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default studentSlice.reducer;
