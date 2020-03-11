import React from 'react';
import s from '../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
        )
}

const Message = (props) =>{
    return (
    <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    // Данные
    let dialogs = [
        {id:1, name:'Dima'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Viktor'},
        {id:6, name:'Valera'}
    ]

    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'How was your day?'},
        {id:3, message:'Sounds good'},
        {id:4, message:'Sounds good'},
        {id: 5, message: 'Sounds good' }
    ]

    // Массив элементов
    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
                {/* <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                */}
                <div className={s.dialog}></div>
            </div>
            {/*Сообщения пользователей*/}
            <div className={s.messages}>
                {
                    messagesElements
                }
              {/* <Message message={messagesData[0].message}/>
              <Message message={messagesData[1].message}/>
              */}
            </div>
        </div>
    )
}

export default Dialogs;