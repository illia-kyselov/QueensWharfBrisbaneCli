export const getDateHeader = (dateStr) => {
    // Если строка содержит время, извлекаем только дату (после пробела)
    let dateOnly = dateStr;
    if (dateStr.includes(' ')) {
        // Предполагаем, что формат "HH:mm DD/MM/YY"
        dateOnly = dateStr.split(' ')[1];
    }
    const parts = dateOnly.split('/');
    // Предполагаем формат DD/MM/YY
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
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
    return dateOnly;
};