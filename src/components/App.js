import React from 'react';
import PrincipleOfManagement from './principle_of_management.js';
import {bindActionCreators} from 'redux';  // object
import {connect} from 'react-redux';

import {updateCount} from '../actions/index';

class App extends React.Component {  // var App based on constructor react.component
  //React.Component passes down props to the constructor
  constructor(props){
    //We access function on the object's parent using the super;
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);   // binding to App
  }

  onButtonClick(){
    this.props.updateCount();
  }

  render() {   // react always has to have a render method and it has to return JSX (looks likes html)
    console.log(this.props);
    return (
      <div>
          HELLO MARS! WE ARE LIVE!
          <PrincipleOfManagement/>
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
