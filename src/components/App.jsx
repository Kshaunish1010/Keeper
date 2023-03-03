import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, setList] = useState([]);

  const onAdd = (note) => {
    setList((prevValue) => {
      return [...prevValue, note];
    });
  };

  const deleteNote = (id) => {
    setList((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onadding={onAdd} />
      {notesList.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            ondelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
