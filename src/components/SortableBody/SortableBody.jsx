import React from 'react';
import classes from '../SortableTable/SortableTable.module.css';

const SortableBody = (props) => { 
    const { data } = props;
  
    let clients = data.map((e) => Object.values(e));
    return(
      <tbody className={classes.customers}>
        {clients.map((element, index) =>
          <tr key={index} onClick={() => props.getCurrentClients(clients[index])}>
            {element.slice(0, 5).map((item, i) =>
              <td key={i}>{item}</td>
            )}
          </tr>
        )}
      </tbody>
    );
  }

  export default SortableBody;