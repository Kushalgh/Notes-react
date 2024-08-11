import React from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

const MainComponent = ({activeNote ,onUpdateNote}) => {

    if (!activeNote) {
        return (
          <div className='no-active-note'>
            Select or Create a Note to Get Started
          </div>
        )
      }


      const onEditField =(key,value) =>{
        onUpdateNote({
            ...activeNote,
            [key] : value,
            lastModified: Date.now()
        })
      }
  return (
    <div className='app-main'>
       
        <div className="app-main-note-edit">
            <input type="text" id='title' value={activeNote.title} onChange={(e)=>onEditField('title',e.target.value)}autoFocus />
            <textarea id="body" placeholder='Write your note here...' value={activeNote.body } onChange={(e)=>onEditField('body',e.target.value)} />

        </div>

        <div className="app-main-note-preview">
            <h1 className='preview-title'>{activeNote.title}</h1>
             <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown> 
        </div>
      
    </div>
  )
}

export default MainComponent
