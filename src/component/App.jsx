import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note]
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, idx) => {
                return idx !== id;
            })
        })
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((nt, idx) => (
            <Note 
                key={idx}
                id={idx}
                title={nt.title}
                content={nt.content}
                onDelete={deleteNote}
            />
        ))}
        <Footer />
    </div>;
}

export default App;