import React from "react"

export default function Note({ note }) {
    return (
        <div>
            {" "}
            <li className='note'>
                <h4 className='title'>{note.title}</h4>
                <p>{note.detail}</p>
                <div className='bottom'>
                    <div className='date'>{note.date}</div>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </li>
        </div>
    )
}
