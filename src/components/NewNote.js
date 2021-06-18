import React from 'react';
import PropTypes from 'prop-types';

function NewNote(props) {
  const { addNote } = props;

  const titleRef = React.createRef();

  const bodyRef = React.createRef();

  const createNote = (event) => {
    event.preventDefault();
    const note = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      id: Date.now(),
    };
    addNote(note);
    event.currentTarget.reset();
  };

  return (
    <form className="new-note" onSubmit={createNote}>
      <input type="text" name="title" ref={titleRef} placeholder="Title" />
      <input type="text" name="body" ref={bodyRef} placeholder="Note" />
      <button type="submit">+ Add Note</button>
    </form>
  );
}

NewNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NewNote;
