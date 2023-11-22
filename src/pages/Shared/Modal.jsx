import React from "react";
import { createPortal } from "react-dom";
import { ModalStyle } from "./styles";
import { Btn } from "../../components/UI/Button/Button";

function ModalLayout({title, content, isOpen, action, onConfirm}){
    return isOpen ? (
        <ModalStyle>
            <div className="h1-modal-container">
                <h1>{title}</h1>
            </div>
            
            <p>{content}</p>
            
            <div className="btn-modal-container">
                <Btn onClick={onConfirm}>{action}</Btn>
            </div>
            
        </ModalStyle>
    ): null;
}

function Modal(props) {
    return createPortal(
        <ModalLayout {...props}/>,
        document.getElementById('modal')
    )
}

export default Modal;