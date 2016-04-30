import React from 'react';
import PrincipleOfManagement from './principle_of_management.js';
import {bindActionCreators} from 'redux';  // object
import {connect} from 'react-redux';
import MouvementLoss from './mouvement_loss.js';

import {updateCount} from '../actions/index';
import SpecificQuestions from './specific_questions.js';

<<<<<<< HEAD
import TestMovements from './test_movements.js'

class App extends React.Component {
=======
class App extends React.Component {  // var App based on constructor react.component
>>>>>>> master
  //React.Component passes down props to the constructor
  constructor(props){
    //We access function on the object's parent using the super;
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);   // binding to App
  }

  onButtonClick(){
    this.props.updateCount();
  }

  render() {
    return (
      <div>
          <TestMovements />
          HELLO MARS! WE ARE LIVE!
          <SpecificQuestions/>
          <PrincipleOfManagement/>
          <MouvementLoss/>
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