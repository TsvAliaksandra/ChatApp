import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(process.env);
    return (
      <div className="App">
        <header className="App-header">
          HELLO REACT
        </header>
      </div>
    );
  }
}

export default App;
