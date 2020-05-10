import React, { Component } from 'react';

//export: 外部で使用する時
//default: import時 { } を使用しない
export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    console.log('handlePlusButton');
    this.setState({ count: this.state.count + 1 });
    //setState: 同時にrenderも回してくれる
  };

  handleMinusButton = () => {
    console.log('handleMinusButton');
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <label>counter: </label>
          <span>{this.state.count}</span>
        </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </div>
    );
  };
}