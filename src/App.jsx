
import { useEffect, useState } from 'react'
import './App.css'
import MainComponent from './MainComponent'
import Sidebar from './Sidebar'
import uuid from 'react-uuid'

function App() {
  const [notes , setNotes] = useState(JSON.parse(localStorage.notes) || [])
  const [activeNote ,setActiveNote] = useState(false)

  useEffect(() =>{
    localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])

    const onAddNote =() => {
      const newNote  ={
        id : uuid(),
        title : "Untitled Note",
        body : "",
        lastModified : Date.now()
      }

      setNotes([newNote,...notes])
      setActiveNote(newNote.id)
      
    }



    const onDeleteNote = (idToDelete) =>{
        setNotes(notes.filter((note)=>note.id !== idToDelete))
    }


    const onUpdateNote = (updatedNote) =>{
      const updatedNotesArray = notes.map((note) =>{
        if(note.id === activeNote){
          return updatedNote
        }
        return note
      })
      setNotes(updatedNotesArray)
    }

    const getActiveNote = () =>{
      return notes.find((note) => note.id === activeNote)
    }
  return (
    
      <div className='main'>
        <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote ={activeNote} setActiveNote ={setActiveNote}/>
        <MainComponent activeNote={getActiveNote()}  onUpdateNote={onUpdateNote}/>
        

       </div>
   
  )
}

export default App
