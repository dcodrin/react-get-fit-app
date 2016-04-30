import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ClientInfo from "./client_info.js";

import {updateCount} from '../actions/index';

class App extends React.Component {
  //React.Component passes down props to the constructor
  constructor(props){
    //We access functions/methods on the object's parent using the super;
    super(props);
    // bind 'this' to my App
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(){
    this.props.updateCount();
  }

  // React components MUST have a render methods and this MUST always return HTML. The 'html' below is actually jsx
  render() {
    console.log(this.props);
    return (
      <div>
          HELLO MARS! WE ARE LIVE!
          <div>
            <button onClick={this.onButtonClick}>Click me!</button>
          </div>
          <div>
            {this.props.count}
          </div>
          <ClientInfo prop="value" />
      </div>
    );
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({updateCount}, dispatch);
}

//The current instance of App will have as one of it's props 'count'
function mapStateToProps(state){
  return {count: state.count};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
