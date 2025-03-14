import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    earningsData: [],
};

const earningsSlice = createSlice({
    name: 'earnings',
    initialState,
    reducers: {
        setEarningsData: (state, action) => {
            state.earningsData.push(action.payload);
        },
        clearEarningsData: (state) => {
            state.earningsData = [];
        },
    },
});

export const { setEarningsData, clearEarningsData } = earningsSlice.actions;
export default earningsSlice.reducer;
