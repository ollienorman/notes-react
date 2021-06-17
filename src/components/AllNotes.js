import React, {useState, useEffect } from 'react'
import Note from './Note';

// sort notes by ID (timestamp)

function AllNotes(props) {
  return (
    <div>
      <ul className="all-notes">
        {props.notes.map((note) => (
          <Note body={note.body} title={note.title} key={note.id}/>
        ))}
      </ul>
    </div>
  )
}

export default AllNotes;