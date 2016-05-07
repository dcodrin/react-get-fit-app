import React from 'react';
class Neurological extends React.Component {

  constructor(props) {
    super(props);
    this.showText = this.showText.bind(this);
    this.handleMotorDeficit = this.handleMotorDeficit;
    this.postResults = this.postResults.bind(this)
  }

  showText() {
    alert("wassup")
  }

  handleMotorDeficit(e) {
    this.setState({
      motorDeficit: e.target.value
    });
  }

  postResults() {
    console.log("Motor deficit: " + this.state.motorDeficit);
  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12"/>
          <div className="row">
        <div className="input-field col s6 z-depth-1">
          <input id="motorDeficit" type="text" className="validate"/>
          <label for="motorDeficit">Motor Deficit</label>
          </div>
        <div className="input-field col s6 z-depth-1">
          <input id="reflexes" type="text" className="validate"/>
          <label for="reflexes">Reflexes</label>
          </div>
        </div>
        
        <div className="row">
          <form className="col s12"/>
          <div className="row">
        <div className="input-field col s6 z-depth-1">
          <input id="sensoryDeficit" type="text" className="validate"/>
          <label for="sensoryDeficit">Sensory Deficit</label>
          </div>
        <div className="input-field col s6 z-depth-1">
          <input id="duralSigns" type="text" className="validate"/>
          <label for="duralSigns">Dural Signs</label>
          </div>
        </div>

        <div className="row">
          <form className="col s12 offset-s6"/>
        <button className="btn waves-effect waves-light z-depth-2" type="submit" name="action">Submit
        </button>
        </div>


        </div>
        </div>
        </div>
    );
  }
}

export default Neurological;

/*
1bundle.js:28337 Uncaught TypeError: Cannot read property 'setState' of undefinedReactErrorUtils.invokeGuardedCallback @ bundle.js:5775
bundle.js:28344 Uncaught TypeError: Cannot read property 'motorDeficit' of nullReactErrorUtils.invokeGuardedCallback @ bundle.js:5775
*/
