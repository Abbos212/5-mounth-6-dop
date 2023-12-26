import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    history: '/',
    current:''
};

const historySlice = createSlice({
    initialState,
    name: 'history',
    reducers: {
        setHistory: (state, action) => {
            state.history = action.payload
        },
        setCurrent: (state, action) => {
            state.current = action.payload
        },
    }
});

const historyReducers =historySlice.reducer;

export const { setHistory,setCurrent } = historySlice.actions;

export default historyReducers;