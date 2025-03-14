export const getDateHeader = (dateStr) => {
    const parts = dateStr.split('/');
    const month = parseInt(parts[0], 10) - 1;
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10) + 2000;
    const dateObj = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const compDate = new Date(dateObj);
    compDate.setHours(0, 0, 0, 0);
    if (compDate.getTime() === today.getTime()) {
        return 'Today';
    }
    if (compDate.getTime() === yesterday.getTime()) {
        return 'Yesterday';
    }
    return dateStr;
};
