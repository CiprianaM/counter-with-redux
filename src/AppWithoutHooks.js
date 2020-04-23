import React from 'react';
import {connect} from "react-redux";
import {increment, decrement} from './redux';

function App(props) {
  return (
    <div>
      <header>{props.count}</header>
      <button onClick={props.dec }>-</button>
      <button onClick={props.inc}>+</button>
    </div>
  );
}

function mapStateToProps (globalState) {
  return {
    count: globalState
  }
}

const mapDispatchToProps = {
  inc: increment,
  dec: decrement
}

//connect ("what parts of the global state do you want to pass?", "what actions do you want to dispatch from this component")

export default connect(mapStateToProps, mapDispatchToProps) (App);
