import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import studyReducer from './slices/studySlice';
import userReducer from './slices/userSlice';
import goalReducer from './slices/goalSlice';
import earningsReducer from './slices/earningsSlice';
import moneyBoxReducer from './slices/moneyBoxSlice';
import categoriesReducer from './slices/categoriesSlice';

const rootReducer = combineReducers({
    study: studyReducer,
    user: userReducer,
    goal: goalReducer,
    earnings: earningsReducer,
    moneyBox: moneyBoxReducer,
    categories: categoriesReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
