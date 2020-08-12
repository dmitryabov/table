import React from 'react';
import './App.css';
import SortableTable from './components/SortableTable/SortableTable';
import { connect } from 'react-redux';
import { setClientsAC, setCurrentPageAC, setCurrentClientAC, toogleIsFetchingtAC, setNewClientAC } from './redux/reduser';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Route } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';


function App(props) {
  return (
    <div className='appWrapper'>
      <Header/>
      <Sidebar />
      <div className='content'>
        <Route exact path='/' render={() =>  <StartPage />}/>
        <Route path='/small' render={() =>  
          <SortableTable route={``} data={props.userReduser} totalClients={32} {...props}/>}/>
        <Route path='/big' render={() => 
          <SortableTable route={`&delay=3&`} data={props.userReduser} totalClients={1000} {...props}/>}/>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    userReduser: state.userReduser.userReduser,
    pageSize: state.userReduser.pageSize,
    totalClientsCount: state.userReduser.totalClientsCount,
    currentPage: state.userReduser.currentPage,
    currentClient: state.userReduser.currentClient,
    isFetching: state.userReduser.isFetching,
  }
}

const mapDiapatchToProps = (dispatch) => {
  return {
    setClients: (clients) => {
      dispatch(setClientsAC(clients));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setCurrentClient: (currentClient) => {
      dispatch(setCurrentClientAC(currentClient));
    },
    toogleIsFetchingt: (currentClient) => {
      dispatch(toogleIsFetchingtAC(currentClient));
    },
    setNewClient: (newClient) => {
      dispatch(setNewClientAC(newClient));
    }
  }
}

const SuperContainer = connect(mapStateToProps, mapDiapatchToProps)(App);

export default SuperContainer;
