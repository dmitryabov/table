import React from 'react';
import upPoitner from '../../../assets/images/up.png';
import style from './Pointer.module.css'



const PointerUp = (props) => {
    return <img className={style.up} src={upPoitner} alt='up'/>
};

export default PointerUp;