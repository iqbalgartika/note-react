import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const [editMode, setEditMode] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function addNote(event) {
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        });
        event.preventDefault();
    }

    function startEditing() {
        setEditMode(true);
    }


    return (
        <div>
        <form className="create-note">
            {editMode && <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />}
            <textarea onChange={handleChange} onClick={startEditing} value={note.content} name="content" placeholder="Take a note..." rows={editMode ? 3 : 1} />
            <Zoom in={editMode}>
                <Fab onClick={addNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
