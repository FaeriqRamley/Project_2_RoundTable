import React from 'react';
import Notepad from "./Notepad";
import {Modal,Button} from 'react-bootstrap';

function NotepadModal(props) {
    return (
        <React.Fragment>
            <Modal.Header closeButton>
                <Modal.Title id="notepad-modal">
                    Take Notes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Notepad/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=> props.setShowModal(false)}>Close</Button>
            </Modal.Footer>
        </React.Fragment>
    )
}

export default NotepadModal;
