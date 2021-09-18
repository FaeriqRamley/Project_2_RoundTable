import React,{useState,useRef} from 'react';
import ReactQuill from 'react-quill';
import "./notepad.css";
import { useSelector } from 'react-redux';
import db from '../../firebase';
import {doc,updateDoc,getDoc} from 'firebase/firestore';
import {Row,Col,ButtonGroup,Button} from 'react-bootstrap';
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
    const currentUser = useSelector(state => state.currentUser)
    const [notes,setNotes] = useState("");
    const noteSaveRef = useRef();
    const noteLoadRef = useRef();
    const [showPopupSave,togglePopupSave] = useState(false);
    const [showPopupLoad,togglePopupLoad] = useState(false);

    const handleNotes = (e) => {
        setNotes(e);
    }

    const addToNoteStorage = async (newNote) => {
        const uid = currentUser.uid;
        const docSnap = await getDoc(doc(db,"userStorage",uid));
        const newNoteStorage = [...docSnap.data().noteStorage,newNote];
        await updateDoc(doc(db,"userStorage",uid),{
            noteStorage: newNoteStorage
        });
    }

    const getFromNoteStorage = async (searchTitle) => {
        const uid = currentUser.uid;
        console.log(uid);
        const docSnap = await getDoc(doc(db,"userStorage",uid));
        const allNotes = docSnap.data().noteStorage;
        for (const note of allNotes){
            if (note.noteTitle === searchTitle){
                setNotes(note.noteContent);
                return null;
            }
        }
        setNotes("<p>Note not found</p>")
    }

    const onClickAddToStorage = (e) => {
        e.preventDefault();
        const newNote = {noteTitle: noteSaveRef.current.value, noteContent: notes};
        addToNoteStorage(newNote);
        togglePopupSave(false);
    }

    const onClickGetNotepad = (e) => {
        e.preventDefault();
        getFromNoteStorage(noteLoadRef.current.value);
        togglePopupLoad(false);
    }

    return (
        <React.Fragment>
            <Row style={{height:"700px",overflow:'auto'}}>
                <ReactQuill 
                theme="snow"
                modules={modules}
                formats={formats}
                onChange={handleNotes}
                value={notes}
                />
            </Row>
            <Row className="mx-auto mt-3 justify-content-between" style={{textAlign:"center"}}>
                <Col>
                    <Button className="btn-success" style={{borderRadius:"0"}} onClick={()=>togglePopupSave(true)} disabled={!currentUser}>Save Notes</Button>
                </Col>
                <Col>
                    <Button className="btn-success" style={{borderRadius:"0"}} onClick={()=>togglePopupLoad(true)} disabled={!currentUser}>Load Notes</Button>
                </Col>
            </Row>
            {showPopupSave && <div>
                Save As
                <input type="text" ref={noteSaveRef}></input>
                <button onClick={onClickAddToStorage}>Add To Storage</button>
            </div>}
            {showPopupLoad && <div>
                Load which notepad
                <input type="text" ref={noteLoadRef}></input>
                <button onClick={onClickGetNotepad}>Load Note</button>
            </div>}
            
        </React.Fragment>
    )
}

export default Notepad;
