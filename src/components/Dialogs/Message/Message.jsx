import React from 'react';
import s from '../Message/Message.module.css';

const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        debugger;
        let text = newMessageElement.current.value;
        props.addMessage(text);
    }

    return (
        <div className={s.item}>
            <div>
                <span>
                    <img src='https://avatarko.ru/img/kartinka/19/zhivotnye_kot_prikol_dengi_18144.jpg' alt='ava' /></span>

                {/* <div className={s.dialog}> */}
                {props.message}

                <div>
                    <textarea ref={newMessageElement}></textarea>

                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Message;