import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Neurological from './neurological.js';
import Posture from './posture.js';

import {updateCount} from '../actions/index';

class App extends React.Component {
  //React.Component passes down props to the constructor
  constructor(props){
    //We access function on the object's parent using the super;
    super(props); //super allows you to access methods of the prototype.

    this.onButtonClick = this.onButtonClick.bind(this);
    //binding this to app component
  }

  onButtonClick(){
    this.props.updateCount();
  }

  render() {    //This is what will actually be displayed
    console.log(this.props);
    return (
      <div>
          <Neurological/>
          <Posture/>
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
          



//React components have to have a render method, and it has to return HTML.
//This is actually .JSX, Facebook's proprietary HTML copy.

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateCount}, dispatch);
}

//The current instance of App will have as one of it's props 'count'
function mapStateToProps(state){
  return {count: state.count}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
