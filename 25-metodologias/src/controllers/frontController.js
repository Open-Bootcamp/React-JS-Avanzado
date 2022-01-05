import { getNotesFromDB } from './dbController';
// import { getNotesFromDB } from './dbMockController';



export const getNotes = async () => {
    const notes = await getNotesFromDB();
    return notes;
}