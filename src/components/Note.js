import { useState } from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import "moment/locale/ko"
import { db } from "../firebase"
import { doc, deleteDoc } from "firebase/firestore"

export default function Note({ note }) {
    const date = moment(note.date.toDate()).format("YYYY-MM-D h:mm")

    async function onDelete() {
        if (window.confirm("정말 삭제하시겠습니까")) {
            await deleteDoc(doc(db, "notes", note.id))
        }
    }
    return (
        <li className='note'>
            <h4 className='title'>{note.title}</h4>
            <p>{note.detail}</p>
            <div className='bottom'>
                <div className='date'>{date}</div>
                <div className='btns'>
                    <button>수정</button>
                    <button>취소</button>
                </div>
            </div>
        </li>
    )
}
