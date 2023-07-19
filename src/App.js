import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Note from "./components/Note";
import Footer from "./components/Footer";
import InputArea from "./components/InputArea.jsx";


// function noteMaker(note)
// {
//     return(
//         <Note
//             key = {note.id}
//             title = {note.title}
//             content = {note.content}
//         ></Note>
//     )
// }



function App(){

    
    const [finalNotes, setNotes] = useState([{
        title : "",
        content : ""
    }]);
    
    function handleClick(newTitle,newNote)
    {
        setNotes((prevValues) => [...prevValues,{title : newTitle, content :newNote}])
    }

    function deleteNote(id)
    {
        setNotes((prevValues) => {
            return(
                prevValues.filter((item,index)=>{
                    return(
                        index !== id 
                    )
                })
            )
        })

    }

    return(
        <div>
            <Header></Header>

            <InputArea addButton={handleClick}> </InputArea>

            <div>
                {finalNotes.map((note,index) =>
                    (
                        <Note
                            key = {index}
                            id = {index}
                            title = {note.title}
                            content = {note.content}
                            onDelete ={deleteNote}
                        ></Note>
                    )
                    )}
            </div>

            
            <Footer></Footer>
        </div>
    );
}

export default App;

// We cant apply classes like className="note" here,because these tags are user genetrated and not the basic tags
