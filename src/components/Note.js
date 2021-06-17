import React, {useState, useEffect } from 'react'

// sort notes by ID (timestamp)

function Note(props) {
  return (
    <div>
      {props.title}
      {props.body}
    </div>
  )
}

export default Note;