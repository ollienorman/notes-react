import { useState } from 'react';
import './App.css';
import NewNote from './components/NewNote';

function App() {
  const [notes, setNotes] = useState([{title: 'test title', body: 'test body'}])

  const addNote = (note) => {
    const notesTemp = [ ...notes ];
    notesTemp.push(note);
    setNotes(notesTemp);
  }

  return (
    <div className="App">
      <NewNote addNote={addNote}/>
    </div>
  );
}

export default App;
