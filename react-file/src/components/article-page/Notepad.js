import React,{useState} from 'react';
import ReactQuill from 'react-quill';
import "./notepad.css";
import { useSelector } from 'react-redux';

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
    const [notes,setNotes] = useState("");
    const handleNotes = (e) => {
        setNotes(e);
    }

    const saveNotes = (e) => {
        e.preventDefault();
        console.log(notes);
    }
    return (
        <React.Fragment>
            <div className="row">
                <h5>{activeArticle.title}</h5>
            </div>
            
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
                <button onClick={saveNotes}>Save Notes</button>
                <button>Load Notes</button>
            </div>
            
        </React.Fragment>
    )
}

export default Notepad;
