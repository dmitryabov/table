import React from 'react';
import classes from '../SortableTable/SortableTable.module.css';
import PointerUp from '../../components/common/Pointer/PointerUp';
import PointerDown from '../common/Pointer/PointerDown';



class SortableHeader extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
     pointer: true
    };
  }

   a = (index, element) => { 
     this.setState({
       pointer: false,
     });
     this.props.onClick(index, element)
  }
  
    render() {
    return(
      <thead className={classes.customers}>
      <tr>
        {this.props.columns.map((element, index) =>
          <th
            key={index}
            onClick={() => { return (
              this.props.onClick(index, element.sort))
              }
            }
            
            
          >
            {element.label}
            {this.state.pointer ? <PointerUp /> : <PointerDown />}
            
            
          </th>
        )}
        
      </tr>
      </thead>
    );
  }
};

  export default SortableHeader;