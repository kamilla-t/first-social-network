import React from 'react';
import s from '../Navbar/Block.module.css';

const Block = (props) => {
    return (
        <div className={s.item}>
            <div>
                <span>
                    <img src='https://cs.pikabu.ru/post_img/2013/09/14/8/1379156968_2046591559.png' alt='ava' />
                </span>
            <div className={s.dialog}> 
            Kamilla
            </div>
        </div>
        </div>

    )
}

export default Block;