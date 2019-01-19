import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id : 1,
        title : "Don't critisize & condemn or complain",
        completed : false
      },
      {
        id : 2,
        title : "Genuinly intrest in other people's opinion",
        completed : false
      },
      {
        id : 3,
        title : "they will check just your presence of mind",
        completed : false
      }
    ]
  }

  render() {
        // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>

    );
  }
}

export default App;
