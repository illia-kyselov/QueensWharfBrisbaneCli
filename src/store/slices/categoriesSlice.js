import { createSlice } from '@reduxjs/toolkit';

const categories = [
    { id: 'food', name: 'Food and drinks', icon: 'food' },
    { id: 'shopping', name: 'Shopping', icon: 'shopping' },
    { id: 'housing', name: 'Housing', icon: 'housing' },
    { id: 'transport', name: 'Transport', icon: 'transport' },
    { id: 'entertainment', name: 'Entertainment', icon: 'entertainment' },
    { id: 'appearance', name: 'Appearance', icon: 'appearance' },
    { id: 'finance', name: 'Finance', icon: 'finance' },
    { id: 'investments', name: 'Investments', icon: 'investments' },
];

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: categories,
    reducers: {},
});

export default categoriesSlice.reducer;
