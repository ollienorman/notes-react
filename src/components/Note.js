import React from 'react'

// sort notes by ID (timestamp)

function Note(props) {
  return (
    <div>
      {props.title}
      {props.body}
      <button type="button" onClick={() => (props.deleteNote(props.id))}>&times; Delete Note</button>
    </div>
  )
}

export default Note;