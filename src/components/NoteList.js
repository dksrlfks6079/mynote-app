// import db from '../db/data.json'
import { useEffect, useState } from "react"
import Note from "./Note"
import { db } from "../firebase"
import { collection, query, onSnapshot } from "firebase/firestore"

export default function NoteList() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const q = query(collection(db, "notes"))
        const unsubscribe = onSnapshot(q, querySnapshot => {
            const items = []
            querySnapshot.forEach(doc => {
                console.log(doc.data())
                items.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            setNotes(items)
        })
    }, [])

    return (
        <ul className='list'>
            {notes.map(note => (
                <Note note={note} key={note.id} />
            ))}
        </ul>
    )
}
