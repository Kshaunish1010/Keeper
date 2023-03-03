import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value
      };
    });
  };
  const submitFunc = (event) => {
    props.onadding(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitFunc}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
