import React, { Component } from 'react';
//jsx使用時 React が必須
import './App.css';

class App extends Component {
  render() {
    //attributeはキャメルケース
    //react.fragment
    return (
      <React.Fragment>
        <label htmlFor='papakatu'>papakatu</label>
        <input type='text' onChange={() => { console.log(11111); } }/>
      </React.Fragment>
    );
  }
}

export default App;
