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

    handleMotorDeficit (e) {
        this.setState({
            motorDeficit: e.target.value
        });
    }
    
    postResults (){
        console.log("Motor deficit: " + this.state.motorDeficit);
    }

        render() {
            return (
                <div>
            <div className="headline">Motor deficit:</div> <input type="text" name="MotorDeficit" onChange={this.handleMotorDeficit} />
            <div className="headline">Reflexes:</div>  <input type="text" name="Reflexes" /><br/>
            <div className="headline">Sensory Deficit: </div>  <input type="text" name="SensoryDeficit" />
            <div className="headline">Dural Signs: </div><input type="text" name="DuralSigns" /><br/>
            <button onClick={this.postResults}>Click me!</button>
        </div>
            )
        }
}

export default Neurological;

/*
1bundle.js:28337 Uncaught TypeError: Cannot read property 'setState' of undefinedReactErrorUtils.invokeGuardedCallback @ bundle.js:5775
bundle.js:28344 Uncaught TypeError: Cannot read property 'motorDeficit' of nullReactErrorUtils.invokeGuardedCallback @ bundle.js:5775
*/
