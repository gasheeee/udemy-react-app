import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";

//export: 外部で使用する時
//default: import時 { } を使用しない
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const props = this.props;
    return (
      <div>
        <div>
          <label>counter: </label>
          <span>{ props.value }</span>
        </div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </div>
    );
  };
}

const mapStateToProps = state => ({ value: state.count.value });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
