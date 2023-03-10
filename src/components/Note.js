import { useState } from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import "moment/locale/ko"

export default function Note({ note }) {
    const date = moment(note.date.toDate()).format("YYYY-MM-D,h:mm")

    function onDelete() {
        //
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
