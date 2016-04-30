import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {updateCount} from '../actions/index';

import TestMovements from './test_movements.js'

class App extends React.Component {
  //React.Component passes down props to the constructor
  constructor(props){
    //We access function on the object's parent using the super;
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(){
    this.props.updateCount();
  }

  render() {
    return (
      <div>
          <TestMovements />
          HELLO MARS! WE ARE LIVE!
          <div>
            <button onClick={this.onButtonClick}>Click me!</button>
          </div>
          <div>
            {this.props.count}
          </div>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({updateCount}, dispatch);
}

//The current instance of App will have as one of it's props 'count'
function mapStateToProps(state){
  return {count: state.count}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);