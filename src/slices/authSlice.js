import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../services/api';

export const loginUserAsync = createAsyncThunk(
    'auth/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await loginUser(userData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerUserAsync = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await registerUser(userData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(registerUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUserAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(registerUserAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;
