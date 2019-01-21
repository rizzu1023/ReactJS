import React, { Component } from 'react';
import './App.css';

class Header extends Component{
  render(){
    return (
      <h3>{this.props.name}</h3>
    );
  }
}


class Footer extends Component{
  state = {
    user : 'edureka',
    social : 'youtube',
  }
  
  render(){                                     
  
    setTimeout(()=> {this.setState({ user:'Rizwan', social: 'instagram'})},2000);
    return (
      <div>
      {/* <h3>This is Footer Component</h3> */}
      <h2>{this.state.user +" "+ this.state.social}</h2>
      </div>
    );
  }
}



// const styles = {
//   color:"lightblue",
//   backgroundColor: "black"
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Mohammed"/>
        <Header name="Rizwan"/>

            Hello World {2+5}
        <Footer />
      </div>
    );
  }
}

export default App;
