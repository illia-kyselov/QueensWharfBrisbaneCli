export const updateAmount = (currentAmount, key) => {
    if (key === '⌫') {
        return currentAmount.length === 1 ? "0" : currentAmount.slice(0, -1);
    } else if (key === '.') {
        return currentAmount.includes('.') ? currentAmount : currentAmount + key;
    } else {
        return currentAmount === "0" ? key : currentAmount + key;
    }
};
