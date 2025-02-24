import { Note } from './App';

export const getFormattedDate = (value: Note) => {
    const date = new Date(value.updatedAt || 0);
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};
