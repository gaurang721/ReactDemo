import React from "react";
import { noteContext, fileContext } from "./NoteContext";
import { useState,useEffect } from "react";

const NoteState = (props) => {
    const [currant, update] = useState([])
    
    const myNewState = async () => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            update(data);
        }
        catch (error) {
            console.log(error);
        }
    }
  
    return (
        <noteContext.Provider value={currant} >
            {props.children}
        </noteContext.Provider>
    )
}

const FileState = (props) => {
    const states = {
        "name": "aayu",
        "work": "node"
    }
    return (
        <fileContext.Provider value={states}>
            {props.children}
        </fileContext.Provider>
    )
}


export { NoteState, FileState }