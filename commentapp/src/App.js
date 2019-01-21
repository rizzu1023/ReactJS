import React, { Component } from 'react';
import './App.css';

class Header extends Component{
  render(){
    return (
      <h3>This is Header Component</h3>
    );
  }
}


class Footer extends Component{
  render(){
    return (
      <h3>This is Footer Component</h3>
    );
  }
}



const styles = {
  color:"lightblue",
  backgroundColor: "black"
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

            Hello World {2+5}
      <Footer />
      </div>
    );
  }
}

export default App;
