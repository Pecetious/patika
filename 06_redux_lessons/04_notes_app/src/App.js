import "./App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContentCard from "./components/ContentCard";
import SearchForm from "./components/SearchForm";
import NoteGrid from "./components/NoteGrid";
function App() {
  const notes = useSelector((state) => state.notes.notes); // Get notes from Redux store
  const [hasNotes, setHasNotes] = useState(false);
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);
      setHasNotes(parsedNotes.length > 0); // Check if there is at least one note
    }
  }, [notes]);
  return (
    <div className="App">
      <h1 className="title">NOTE APP</h1>
      <SearchForm />
      <ContentCard />
      {hasNotes ? <NoteGrid /> : <p>No notes available. Please add a note.</p>}
    </div>
  );
}

export default App;
