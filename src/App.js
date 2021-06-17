import { useEffect, useState } from 'react';
import './App.css';
import NewNote from './components/NewNote';
import AllNotes from './components/AllNotes';

function App() {
  const [notes, setNotes] = useState([])

  const addNote = (note) => {
    const notesTemp = [ ...notes ];
    notesTemp.push(note);
    setNotes(notesTemp);
  }

  useEffect(() => {
    console.log('in localStorage useEffect');
    const localStorageRef = localStorage.getItem('notes')
    console.log(localStorageRef);
    if (localStorageRef) {
      setNotes(JSON.parse(localStorageRef))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'notes',
      JSON.stringify(notes)
    )
  })

  return (
    <div className="App">
      <NewNote addNote={addNote}/>
      <AllNotes notes={notes}/>
    </div>
  );
}

export default App;
