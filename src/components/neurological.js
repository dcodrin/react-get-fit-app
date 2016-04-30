import React from 'react';
class Neurological extends React.Component {

    constructor(props) {
        super(props);
        this.showText = this.showText.bind(this);
    }

    showText() {
        alert("wassup")
    }

    handleEmailChange (e) {
        this.setState({
            MotorDeficit: e.target.value
        });
    }
    
    handlePasswordChange (e) {
            this.setState({
                Reflexes: e.target.value
            });
        }

        render() {
            return (
                <div>
            <div className="headline">Motor deficit:</div> <input type="text" name="MotorDeficit" onChange={this.handleEmailChange} />
            <div className="headline">Reflexes:</div>  <input type="text" name="Reflexes" /><br/>
            <div className="headline">Sensory Deficit: </div>  <input type="text" name="SensoryDeficit" />
            <div className="headline">Dural Signs: </div><input type="text" name="DuralSigns" /><br/>
            <button onClick={this.handleEmailChange()}>Click me!</button>
        </div>
            )
        }
}

export default Neurological;
