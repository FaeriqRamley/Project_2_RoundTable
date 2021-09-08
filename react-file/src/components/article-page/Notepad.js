import React,{useState,useRef} from 'react';
import ReactQuill from 'react-quill';
import "./notepad.css";
import { useSelector } from 'react-redux';
import db from '../../firebase';
import {doc,updateDoc,getDoc} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

function Notepad() {
    const activeArticle = useSelector(state => state.activeArticle)
    const currentUser = useSelector(state => state.currentUser)
    const [notes,setNotes] = useState("");
    const noteTitleRef = useRef();
    const [showPopup,togglePopup] = useState(false);
    const [showPopup2,togglePopup2] = useState(true);
    const handleNotes = (e) => {
        setNotes(e);
    }

    const onClickTogglePopup = (e) => {
        e.preventDefault();
        togglePopup(true);
    }

    const addToNoteStorage = async (newNote) => {
        const uid = currentUser.uid;
        const docSnap = await getDoc(doc(db,"userStorage",uid));
        const newNotes = [...docSnap.data().noteStorage];
        await updateDoc(doc(db,"userStorage",uid),{
            noteStorage: newNotes
        });
        noteTitleRef.current.value = "";
    }

    const onClickAddToStorage = (e) => {
        e.preventDefault();
        const newNote = {noteTitle: noteTitleRef.current.value, noteContent: notes};
        addToNoteStorage(newNote);
    }

    return (
        <React.Fragment>
            <div className="row">
                <h5>{activeArticle.title}</h5>
            </div>
            {}
            
            <div className="row">
                <h2>Take Notes</h2>
            </div>
            <div className="row" style={{height:"60%",overflow:'auto'}}>
                <ReactQuill 
                theme="snow"
                modules={modules}
                formats={formats}
                onChange={handleNotes}
                value={notes}
                />
            </div>
            <div className="row">
                <button onClick={togglePopup} disabled={!currentUser}>Save Notes</button>
                <button disabled={!currentUser}>Load Notes</button>
            </div>
            {showPopup && <div>
                Save As
                <input type="text" ref={noteTitleRef}></input>
                <button onClick={onClickAddToStorage}>Add To Storage</button>
            </div>}
            {showPopup2 && <div>
                Load which notepad
                <input type="text" ref={noteTitleRef}></input>
                <button onClick={onClickAddToStorage}>Add To Storage</button>
            </div>}
            
        </React.Fragment>
    )
}

export default Notepad;
