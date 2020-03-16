import React from 'react';
import s from '../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Message/Message';

const Dialogs = (props) => {

    // Массив элементов
    let dialogsElements = props.state.dialogs.map(d => 
    <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messages.map(m => 
    <Message message={m.message} addMessage={props.addMessage} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
                
                <div className={s.dialog}></div>
            </div>

            {/*Сообщения пользователей*/}

            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
            
        </div>
    )
}

export default Dialogs;