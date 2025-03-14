import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    about: '',
    avatarUri: null,
    money: 0,
    transactions: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setAbout: (state, action) => {
            state.about = action.payload;
        },
        setAvatarUri: (state, action) => {
            state.avatarUri = action.payload;
        },
        setMoney: (state, action) => {
            state.money = action.payload;
        },
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
        },
        setTransactions: (state, action) => {
            state.transactions = action.payload;
        },
    },
});

export const {
    setEmail,
    setFirstName,
    setLastName,
    setAbout,
    setAvatarUri,
    setMoney,
    addTransaction,
    setTransactions,
} = userSlice.actions;


export const selectCurrentMonthSpent = (state) => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    return state.user.transactions.reduce((sum, tx) => {
        const datePart = tx.date.split(' ')[1];
        if (datePart) {
            const parts = datePart.split('/');
            if (parts.length === 3) {
                const month = parseInt(parts[1], 10) - 1;
                const year = 2000 + parseInt(parts[2], 10);
                if (month === currentMonth && year === currentYear && tx.type === 'Pay') {
                    return sum + tx.amount;
                }
            }
        }
        return sum;
    }, 0);
};

export const selectCurrentMonthDeposit = (state) => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    return state.user.transactions.reduce((sum, tx) => {
        const datePart = tx.date.split(' ')[1] || tx.date;
        const parts = datePart.split('/');
        if (parts.length === 3) {
            const month = parseInt(parts[1], 10) - 1;
            const year = 2000 + parseInt(parts[2], 10);
            if (month === currentMonth && year === currentYear && tx.type === 'Deposit') {
                return sum + tx.amount;
            }
        }
        return sum;
    }, 0);
};


export default userSlice.reducer;
