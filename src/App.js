import React, { Component } from 'react';
import Todos from './components/Todos';
// import Header from './components/layout/Header';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id : 1,
        title : "React JavaScript",
        completed : false
      },
      {
        id : 2,
        title : "Angular JavaScript",
        completed : false 
      },
      {
        id : 3,
        title : "Vue JavaScript",
        completed : false
      }
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(i => {
      if(i.id === id){
        i.completed = !i.completed
      }
      return i;
    })});
  }

  //delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(i => i.id !== id)]})
  }

  render() {
        // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>

    );
  }
}

export default App;
