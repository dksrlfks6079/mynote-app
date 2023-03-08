import React, { useState } from "react"
import NoteList from "./components/NoteList"
import Header from "./components/Header"

export default function App() {
    return (
        <div className='App'>
            <Header />
            <NoteList />
        </div>
    )
}
