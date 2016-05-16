import React from 'react';
import {connect} from 'react-redux';
import {updateCount} from '../actions/index';
import {bindActionCreators} from 'redux';  // object

import SideNav from "./side_nav.js"
import ClientInfo from "./client_info.js";
import History from "./history.js";
import MouvementLoss from './mouvement_loss.js';
import Neurological from './neurological.js';
import Posture from './posture.js';
import TestMovements from './test_movements.js';
import StaticOtherTests from './static_other_tests.js';
import ProvisionalClassification from './provisional_class.js';
import PrincipleOfManagement from './principle_of_management.js';
import SpecificQuestions from './specific_questions.js';



class App extends React.Component {


  constructor(props){


    super(props);
    //We access function on the object's parent using the super;


    // bind 'this' to my App
    //this.onButtonClick = this.onButtonClick.bind(this);

  }

  // onButtonClick(){
  //   this.props.updateCount();
  // }



  // React components MUST have a render methods and this MUST always return HTML. The 'html' below is actually jsx

  render() {
    return (
      <div>
          <SideNav />
          <ClientInfo prop="value" />
          <History />
          <SpecificQuestions/>
          <Posture/>
          <Neurological/>
          <MouvementLoss/>
          <TestMovements />
          <StaticOtherTests />
          <ProvisionalClassification />
          <PrincipleOfManagement/>
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
  return {count: state.count};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);