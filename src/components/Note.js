import React from 'react'
import styled from 'styled-components';

// sort notes by ID (timestamp)

const Wrapper = styled.div`
  background-color: rgba(243, 225, 156, 0.5);
`

function Note(props) {
  return (
    <Wrapper>
      <h3> 
        {props.title}
      </h3>
      <p>
        {props.body}
      </p>
      <button type="button" onClick={() => (props.deleteNote(props.id))}>&times; Delete Note</button>
    </Wrapper>
  )
}

export default Note;