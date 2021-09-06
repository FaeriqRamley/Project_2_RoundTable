import React,{useState} from 'react';
import ReactQuill from 'react-quill';
import "./notepad.css";

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
        </React.Fragment>
    )
}

export default Notepad;
