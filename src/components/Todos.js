import React, { Component } from 'react';
import Todositem from './Todositem';
import PropTypes from 'prop-types';


class Todos extends Component {
  
  render() {
    //   console.log(this.props.todos)
    return this.props.todos.map((i) => (
        <Todositem key={i.id} i={i} markComplete={this.props.markComplete} delTodo = {this.props.delTodo}/>
    ));
}
}
 //PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
