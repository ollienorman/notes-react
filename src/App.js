import { useEffect, useState } from 'react';
import './App.css';
import NewNote from './components/NewNote';
import AllNotes from './components/AllNotes';

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    const notesTemp = [...notes];
    notesTemp.push(note);
    setNotes(notesTemp);
  };

  const deleteNote = (noteId) => {
    const noteToDelete = notes.find((note) => note.id === noteId);
    const index = notes.indexOf(noteToDelete);
    const notesTemp = [...notes];
    notesTemp.splice(index, 1);
    setNotes(notesTemp);
  };

  useEffect(() => {
    const localStorageRef = localStorage.getItem('notes');
    if (localStorageRef) {
      setNotes(JSON.parse(localStorageRef));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  });

  return (
    <div className="App">
      <NewNote addNote={addNote} />
      <AllNotes notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
