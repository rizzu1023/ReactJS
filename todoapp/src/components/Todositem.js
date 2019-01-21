import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todositem extends Component {
   getStyle = () => {
    //    if(this.props.i.completed){
    //        return{
    //            backgroundColor: 'lightgreen'
    //        }
    //    }
    //    else{
    //        return{
    //            backgroundColor: '#fff'
    //        }
    //    }
          return{
              padding: '10px',
              borderBottom: '1px #ccc dotted',
              backgroundColor : this.props.i.completed ? 'lightgreen' : '#fff'
          }
   }
  
   
    render() {
        const { id, title } = this.props.i;
    return (
    //   <div style={{ backgroundColor: "#f7f7f7"}}>   //inline CSS
        // <div style={ itemStyle }>
      <div style={ this.getStyle() }>
        <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> 
        <p style={{ marginLeft:'10px', display:'inline-block'}}> { title } </p>
        <button style={ btnStyle } onClick={this.props.delTodo.bind(this, id)}>x</button>
      </div>
    )
  }
} 

// const itemStyle = {
//     backgroundColor : '#f7f7f7'
// }

const btnStyle = {
    backgroundColor : '#ff0000',
    color : '#fff',
    borderRadius : '50%',
    float : 'right',
    padding : '5px 8px',
    border : 'none',
    cursor : 'pointer', 
}

//Props Types
Todositem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default Todositem
