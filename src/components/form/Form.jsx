import React from 'react';
import { reduxForm, Field } from 'redux-form';
import style from './Form.module.css';

const AddClientForm = (props) => { 
    return(
          <form onSubmit={props.handleSubmit}>
            <div>
               <Field placeholder={'id'} name={'id'} component={'input'}/>
            </div>
            <div>
               <Field placeholder={'firstName'} name={'firstName'} component={'input'}/>
            </div>
            <div>
               <Field placeholder={'lastName'} name={'lastName'} component={'input'}/>
            </div>
            <div>
               <Field placeholder={'email'} name={'email'} component={'input'}/>
            </div>
            <div>
               <Field placeholder={'phone'} name={'phone'} component={'input'}/>
            </div>
            <div>
                <button className={style.button} onClick={props.clickOnButtonForm}>add client</button>
            </div>
          </form>
    );
  }

  const LoginReduxForm = reduxForm({
    form: 'addClientForm'
  })(AddClientForm);

const Form = (props) => { 
    return(
        <div>
          <h1>Add CLIENT</h1>
          <LoginReduxForm onSubmit={props.clickOnButtonForm}/>
        </div>
    );
  }

  export default Form;