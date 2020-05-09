import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2 className="mt-3">Mushroom Picker React App</h2>
        <button className="btn btn-danger mt-3">This is an Info Button, DO NOT CLICK!</button>
      </div>
    );
  }
}

export default App;
