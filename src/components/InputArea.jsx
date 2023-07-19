import React, { useState } from "react";

function InputArea(props)
{
    const [newTitle, setNewTitle] = useState("");
    const [newNote, setNewNote] = useState("");


    // function handleTitleChange(event)
    

    function handleNoteChange(event)
    {
        const addedNote =event.target.value;
        setNewNote(addedNote);
    }

    function handleAddNote(event)
    {
        props.addButton(newTitle,newNote);
        setNewTitle("");
        setNewNote("");

        event.preventDefault();
    }
    return(
        <div>
                <form>

                <input 
                type="text" 
                placeholder="Add Your Note Title"  
                value={newTitle} 
                onChange={(event) => {
                        const addedTitle =event.target.value;
                        setNewTitle(addedTitle);
                    }}

                ></input>

                <input 
                type="text" 
                placeholder="Add Your Note"  
                value={newNote} 
                onChange={handleNoteChange}
                ></input>


                <br></br>

                <button onClick={handleAddNote} type="submit">
                Add
                </button>
                </form>

            </div>
    )
}

export default InputArea;


