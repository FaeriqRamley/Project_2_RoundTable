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

    return (
        <React.Fragment>
            <div>
                <h2>Take Notes</h2>
            </div>
            <ReactQuill 
                theme="snow"
                modules={modules}
                formats={formats}
                onChange={handleNotes}
                value={notes}
            />
            {activeArticle.title}
        </React.Fragment>
    )
}

export default Notepad;
