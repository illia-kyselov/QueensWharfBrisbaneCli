import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moneyBoxData: [],
};

const moneyBoxSlice = createSlice({
    name: 'moneyBox',
    initialState,
    reducers: {
        addMoneyBoxEntry: (state, action) => {
            state.moneyBoxData.push(action.payload);
        },
        removeMoneyBoxEntry: (state, action) => {
            state.moneyBoxData = state.moneyBoxData.filter(
                (item) => item.id !== action.payload
            );
        },
        clearMoneyBoxData: (state) => {
            state.moneyBoxData = [];
        },
    },
});

export const {
    addMoneyBoxEntry,
    removeMoneyBoxEntry,
    clearMoneyBoxData
} = moneyBoxSlice.actions;

export default moneyBoxSlice.reducer;
