import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// sort notes by ID (timestamp)

const Wrapper = styled.div`
  background-color: rgba(243, 225, 156, 0.5);
`;

function Note(props) {
  const { title } = props;
  const { body } = props;
  const { id } = props;
  const { deleteNote } = props;

  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>{body}</p>
      <button type="button" onClick={() => deleteNote(id)}>
        &times; Delete Note
      </button>
    </Wrapper>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default Note;
