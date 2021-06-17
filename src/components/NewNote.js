import React from 'react'

class NewNote extends React.Component {

  titleRef = React.createRef();
  bodyRef = React.createRef();

  createNote = (event) => {
    event.preventDefault();
    console.log(this);
    const note = {
      title: this.titleRef.current.value,
      body: this.bodyRef.current.value
    }
    console.log(note);
  }

  render() {
    return (
      <form className="new-note" onSubmit={this.createNote}>
        <input type="text" name="title" ref={this.titleRef} placeholder="Title"/>
        <input type="text" name="body" ref={this.bodyRef} placeholder="Note"/>
        <button type="submit">+ Add Note</button>
      </form>
  )
  }
}

export default NewNote
