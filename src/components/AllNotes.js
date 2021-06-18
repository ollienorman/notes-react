import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

// sort notes by ID (timestamp)

function AllNotes(props) {
  const { notes } = props;
  const { deleteNote } = props;

  return (
    <div>
      <ul className="all-notes">
        {notes.map((note) => (
          <Note
            body={note.body}
            title={note.title}
            id={note.id}
            key={note.id}
            deleteNote={deleteNote}
          />
        ))}
      </ul>
    </div>
  );
}

AllNotes.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
};

export default AllNotes;
