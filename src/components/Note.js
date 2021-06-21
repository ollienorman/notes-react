import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// sort notes by ID (timestamp)

const Wrapper = styled.div`
  background-color: rgba(243, 225, 156, 0.5);
  min-height: 150px;
  width: 300px;
  margin-bottom: 20px;
  padding: 5px;
`;

const DeleteButton = styled.button`
  background-color: rgba(117, 117, 117, 1);
  border: none;
  color: white;
  padding: 8px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
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
      <DeleteButton type="button" onClick={() => deleteNote(id)}>
        &times; Delete Note
      </DeleteButton>
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
