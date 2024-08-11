# Notes App

This is a simple Notes application built using React. It allows users to create, update, and delete notes. The application saves notes to the browser's `localStorage` to preserve data across sessions.

## Features

- **Create Note**: Add a new note with a default title "Untitled Note".
- **Update Note**: Edit the title and body of an existing note.
- **Delete Note**: Remove a note from the list.
- **Preview Note**: View a live preview of the note with Markdown rendering.
- **Persistent Storage**: Notes are stored in `localStorage` so they are preserved even after the browser is closed.

## Components

### 1. `App.jsx`
- Manages the state for all notes and the active note.
- Handles adding, deleting, and updating notes.
- Syncs the notes with `localStorage`.

### 2. `Sidebar.jsx`
- Displays the list of notes in the sidebar.
- Allows users to add a new note or delete existing ones.
- Highlights the active note.

### 3. `MainComponent.jsx`
- Displays the editor for the active note.
- Provides an input field for the note title and a textarea for the note body.
- Renders a live preview of the note body using `ReactMarkdown`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
