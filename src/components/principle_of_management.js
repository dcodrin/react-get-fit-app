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
            <div className="mainForm">
                <img className= "image" src="http://data.whicdn.com/images/72152445/original.gif"/>
                <button className="buttonStyle" onClick={this.alertButton}>Make the unicorn talk! ^-^</button>
                <div className="fields">Education</div> <input className="input-fields"/>
                <div className="fields">Equipment Provided</div> <input className="input-fields"/>
                <div className="fields">Mechanical Therapy: YES / NO</div>  <input className="input-fields"/>
                <div className="fields">Extension Principle:</div> <input className="input-fields"/>
                <div className="fields">Lateral Principle:</div> <input className="input-fields"/>
                <div className="fields">Flexion Principle:</div> <input className="input-fields"/>
                <div className="fields">Other:</div> <input className="input-fields"/>
                <div className="fields">Treatment Goals:</div> <input className="input-fields"/>
                <button className="buttonStyle" onClick={this.alertButton2}>Send your infos to the unicorn~</button>
            </div>
        </div>);
    }
}

export default PrincipleOfManagement;
