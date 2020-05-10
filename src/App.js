import React, { Component } from 'react';
//jsx使用時 React が必須
import Counter from './Counter';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Counter></Counter>
    );
  }
}

export default App;
