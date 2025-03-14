import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    spendingData: [],
};

const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        setSpendingData: (state, action) => {
            state.spendingData.push(action.payload);
        },
        clearSpendingData: (state) => {
            state.spendingData = [];
        },
    },
});

export const { setSpendingData, clearSpendingData } = goalSlice.actions;
export default goalSlice.reducer;

