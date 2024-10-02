import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const loadNotesFromLocalStorage = () => {
  const savedNotes = localStorage.getItem("notes");
  if (!savedNotes) {
    localStorage.setItem("notes", JSON.stringify([]));
    return [];
  }
  return JSON.parse(savedNotes);
};

const saveNotesToLocalStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: loadNotesFromLocalStorage() || [],
    searchTerm: "",
  },
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: nanoid(),
        note: action.payload.note,
        color: action.payload.color,
      };
      state.notes.push(newNote);
      saveNotesToLocalStorage(state.notes); // Save updated notes to localStorage
    },
    destroyNote: (state, action) => {
      // Filter out the note by id
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      saveNotesToLocalStorage(state.notes); // Update localStorage
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addNote, destroyNote, updateSearchTerm } = notesSlice.actions;
export default notesSlice.reducer;
