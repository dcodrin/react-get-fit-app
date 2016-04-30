import React from 'react';
class Posture extends React.Component {
    
    render() {
        return (
        <div>
            Motor deficit: <input type="text" name="MotorDeficit"  />
            Reflexes <input type="text" name="Reflexes" /><br/>
            Sensory Deficit: <input type="text" name="SensoryDeficit" />
            Dural Signs: <input type="text" name="DuralSigns" /><br/>
            <input type="submit" value="Submit" />

        </div>
        )
    }
}

export default Posture;
