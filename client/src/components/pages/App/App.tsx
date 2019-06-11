import React, { Component } from 'react';

interface IProps {}

class App extends Component <IProps> {
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
