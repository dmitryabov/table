import React from 'react';
import style from './UserDetailsCard.module.css';

class UserDetailsCard  extends React.Component {
 
    render() {
     return(<div className={style.card}>
       <div>Выбран пользователь: <b>{this.props.user  ? `${this.props.user[1]} ${this.props.user[2]}` : ``}</b></div> 
       <div>Описание:</div>
         {this.props.user  ? this.props.user[9] : ``}
      <div>Адрес проживания: <b>{this.props.user  ? this.props.user[5] : ``}</b></div>
      <div>Город: <b>{this.props.user  ? this.props.user[6] : ``}</b></div>
      <div>Провинция/штат: <b>{this.props.user ? this.props.user[7] : ``}</b></div>
      <div>Индекс: <b>{this.props.user  ? this.props.user[8] : ``}</b></div>
   </div>)
    }
 };

 export default UserDetailsCard;
   