import { configureStore } from '@reduxjs/toolkit';
import studyReducer from './slices/studySlice';
import userReducer from './slices/userSlice';
import goalReducer from './slices/goalSlice';
import earningsReducer from './slices/earningsSlice';
import moneyBoxReducer from './slices/moneyBoxSlice';
import categoriesReducer from './slices/categoriesSlice';

const store = configureStore({
    reducer: {
        study: studyReducer,
        user: userReducer,
        goal: goalReducer,
        earnings: earningsReducer,
        moneyBox: moneyBoxReducer,
        categories: categoriesReducer,
    },
});

export default store;
