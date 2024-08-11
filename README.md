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


##ScreenShots
<img width="1469" alt="Screenshot 2024-08-11 at 18 53 47" src="https://github.com/user-attachments/assets/36f01f0e-4ed3-4e95-9187-b191921b0622">
<img width="1470" alt="Screenshot 2024-08-11 at 18 54 00" src="https://github.com/user-attachments/assets/cea66c31-34ab-4b5d-9a07-ca26fd1759c2">
<img width="1467" alt="Screenshot 2024-08-11 at 18 54 36" src="https://github.com/user-attachments/assets/bbad5f21-5586-43cd-bca0-c651c6e22493">


