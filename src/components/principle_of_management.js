import React from 'react';  // ES6, to use with webpack / same as require in node

class PrincipleOfManagement extends React.Component {
    constructor(props){
    //We access function on the object's parent using the super;
    super(props);
    
    this.alertButton = this.alertButton.bind(this);  
  }
  
    alertButton() {
      alert("Hello!!!!!!!");
    }
    alertButton2() {
      alert("Thanks pal!");
    }
    render() {
      return (<div className="bg">
        <div className="row" id="mainForm">
          <div className="row" id="center">
            <div className="input-field col s3">
            </div>
            <div className="input-field col s6">
              <img className= "image" src="http://data.whicdn.com/images/72152445/original.gif"/>
            </div>
            <div className="input-field col s3">
            </div>
          </div>
          <div className="row" id="center">
            <div className="input-field col s3">
            </div>
            <div className="input-field col s6">
              <button className="buttonStyle" onClick={this.alertButton}>Make the unicorn talk! ^-^</button>
            </div>
            <div className="input-field col s3">
            </div>
          </div>
            <div className="row">
              <div className="col s12">
                <div className ="row">
                  <div className="input-field col s6">
                    <input id="education" type="text" className="validate"/>
                    <label for="education">Education</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="equipment_provided" type="text" class="validate"/>
                    <label for="equipment_provided">Equipment Provided</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s8">
                    <input id="mechanical_therapy" type="text" className="validate"/>
                    <label for="mechanical_therapy">Mechanical Therapy</label>
                  </div>
                  <div className="input-field col s2">
                    <p>
                      <input name="choice" type="radio" id="test1" />
                      <label for="test1">YES</label>
                    </p>
                  </div>
                  <div className="input-field col s2">
                    <p>
                      <input name="choice" type="radio" id="test1" />
                      <label for="test1">NO</label>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="extension_principle" type="text" className="validate"/>
                    <label for="extension_principle">Extension Principle</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="lateral_principle" type="text" className="validate"/>
                    <label for="lateral_principle">Lateral Principle</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="flexion_principle" type="text" className="validate"/>
                    <label for="flexion_principle">Flexion Principle</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="other" class="materialize-textarea"></textarea>
                    <label for="other">Other</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="treatment_goals" type="text" className="validate"/>
                    <label for="treatment_goals">Treatment Goals</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s3">
                  </div>
                  <div className="input-field col s6" id="center">
                    <button className="buttonStyle" onClick={this.alertButton2}>Send your infos to the unicorn~</button>
                  </div>
                  <div className="input-field col s3">
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>);
    }
}

export default PrincipleOfManagement;