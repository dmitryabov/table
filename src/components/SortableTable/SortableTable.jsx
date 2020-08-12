import React from 'react';
import classes from '../SortableTable/SortableTable.module.css';
import style from './Table.module.css';
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';
import * as axios from 'axios';
import UserDetailsCard from '../UserDetailsCard/UserDetailsCard';
import SortableHeader from '../SortableHeader/SortableHeader';
import SortableBody from '../SortableBody/SortableBody';
import {TABLE_COLUMNS} from '../../utils/utils';
import Preloader from '../common/Preloader/Preloader';
import Form from '../form/Form';


export default class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      columns: TABLE_COLUMNS,
      curretClients: 0,
      formIsOpen: false
    };
  }


  clickOnForm = () => {
    this.setState({
      formIsOpen: true,
    });
  }

  clickOnButtonForm = (values) => {
    this.setState({
      formIsOpen: false,
    });
    this.props.setNewClient(
      {id: values.id, 
       firstName: values.firstName, 
       lastName: values.lastName, 
       email: values.email, 
       phone: values.phone})
  }

  componentDidMount() {
    this.props.toogleIsFetchingt(true);
    axios.get(`http://www.filltext.com/?rows=${this.props.pageSize}&id={number|${this.props.currentPage}}&firstName={firstName}${this.props.route}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    .then(response => {
        this.props.toogleIsFetchingt(false);
        this.props.setClients(response.data);
        const { data } = this.props;
        const clients = data.map(function(client) {
          
       return  [client.id, client.firstName, client.lastName, client.email,
        client.phone, client.address.streetAddress, client.address.city, client.address.state,
        client.address.zip, client.description];
        })
        this.setState({ clients });
       
    });
   
  }

  onPageChanged = (pageNumber) => {
      this.props.toogleIsFetchingt(true);
      this.props.setCurrentPage(pageNumber);
      axios.get(`http://www.filltext.com/?rows=${this.props.pageSize}&id={number|${pageNumber}}&firstName={firstName}${this.props.route}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    .then(response => {
      this.props.toogleIsFetchingt(false);
        this.props.setClients(response.data);
        const { data } = this.props;
        const clients = data.map(function(client) {
       
          return  [client.id, client.firstName, client.lastName, client.email,
           client.phone, client.address.streetAddress, client.address.city, client.address.state,
           client.address.zip, client.description];
           })
           this.setState({ clients });
          
       });
  }

  render() {
    const pageCount = Math.ceil(this.props.totalClients / this.props.pageSize);
    const pages = [];
    for (let i=1; i <= pageCount; i++) {
       pages.push(i);
    }

    const getCurrentClients = (client) => {
      this.props.setCurrentClient(client)
  };
  
    return (<>
        <div className={style.pagination}> 
            {pages.map(page => {
                return <span
                   className={this.props.currentPage === page ? style.active : style.paginationPage} 
                   key={page}
                   onClick={(e) => {this.onPageChanged(page)}}
                   >{page}</span> 
            })}
        </div>
        <div>
        {this.props.isFetching ? <Preloader /> : <>
        <div>
          {this.state.formIsOpen ? 
          <Form clickOnButtonForm={this.clickOnButtonForm}/> : 
          <button className={classes.button} onClick={this.clickOnForm}>Добавить клиента</button>}
         
        </div>
      
      <table className={classes.block}>
        
        <SortableHeader columns={this.state.columns} onClick={this.sortTableFunc}/>
        <SortableBody data={this.state.clients} getCurrentClients={getCurrentClients}/>
        
      </table>
      </>}
      </div>
     {this.props.currentClient === null ? `` : <UserDetailsCard user={this.props.currentClient}/>}
      
      </>
    );
  }

  sortTableFunc = (id, sortMethod) => {
    const {clients, columns } = this.state;
    let currentSortMethod = 'default';

    switch (sortMethod) {
      case 'default':
        currentSortMethod = 'asc';
        break;
      case 'asc':
        currentSortMethod = 'desc';
        break;
      case 'desc':
        currentSortMethod = 'asc';
        break;
      default:
        currentSortMethod = 'asc';
    }

    const changeColumn = columns.map((e, i) =>
      ({ ...e, sort: i === id ? currentSortMethod : 'default' })
    );

    const sortData = sortMultidimensionalArrayFunc(clients, id, currentSortMethod);
    this.setState({
      clients: sortData,
      columns: changeColumn,
    });
  }
}