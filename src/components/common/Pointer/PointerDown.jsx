import React from 'react';
import downPoitner from '../../../assets/images/down.png';
import style from './Pointer.module.css'



const PointerDown = (props) => {
    return <img className={style.up} src={downPoitner} alt='up'/>
};

export default PointerDown;