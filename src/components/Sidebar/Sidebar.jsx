import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => { 
    
    return( 
        <nav className={classes.sidebar}>
          <div className={`${classes.item}`}>
            <NavLink exact to='/' activeClassName={classes.active}>Start Page</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/small' activeClassName={classes.active}>Small data set</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/big' activeClassName={classes.active}>Large data set</NavLink>
          </div>
        </nav>
    );
  }

  export default Sidebar;