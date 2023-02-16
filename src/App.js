import './App.css';
import React from 'react'
import Content from './Componets/Content'
import {NoteState,FileState} from './reducer/NoteState'



export default function App() {
  return (
    <>
      <NoteState >
        <FileState>
          <Content />
        </FileState>
      </NoteState>
    </>
  )
}

// <a href="tel:01613881700">Call up on <b>0161 388 1700</b></a>