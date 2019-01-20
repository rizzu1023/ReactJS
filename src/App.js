import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About';
// import Header from './components/layout/Header';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id : uuid.v4(),
        title : "React JavaScript",
        completed : false
      },
      {
        id : uuid.v4(),
        title : "Angular JavaScript",
        completed : false 
      },
      {
        id : uuid.v4(),
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

  //add todo
  addTodo = (title) => {
    const newTodo = {
        id : uuid.v4(),
        title,
        completed : false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
        // console.log(this.state.todos)
    return (
      <Router>
      <div className='App'>
      <div className="container">
        <Route path="/" render={props => (
          <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )} />
        <Route path="/about" component={About}/>
        
      </div>
      </div>
      </Router>

    );
  }
}

export default App;
