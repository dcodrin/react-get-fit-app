import React from 'react';
class Posture extends React.Component {

    render() {
        return (
            <div>
                Sitting:
                <input type="radio" name="sitting" value="Good"/> Good
                <input type="radio" name="sitting" value="Fair"/> Fair
                <input type="radio" name="sitting" value="Poor"/> Poor
                Standing:
                <input type="radio" name="standing" value="Good"/> Good
                <input type="radio" name="standing" value="Fair"/> Fair
                <input type="radio" name="standing" value="Poor"/> Poor
                Lordosis:
                <input type="radio" name="lordosis" value="Red"/> Red
                <input type="radio" name="lordosis" value="Acc"/> Acc
                <input type="radio" name="lordosis" value="Normal"/> Normal<br/>
                Lateral Shift:
                <input type="radio" name="lateralShift" value="Right"/> Right
                <input type="radio" name="lateralShift" value="Left"/> Left
                <input type="radio" name="lateralShift" value="Nil"/> Nil
                
                Correction of Posture:
                <input type="radio" name="posture" value="Better"/> Better
                <input type="radio" name="posture" value="Worse"/> Worse
                <input type="radio" name="posture" value="No Effect"/> No Effect
                
                <input type="text" name="Comment"/>
                Relevant:
                <input type="radio" name="relevant" value="Yes"/> Yes
                <input type="radio" name="relevant" value="No"/> No<br/>
                Other Observations:
                <input type="text" name="MotorDeficit"/>

            </div>
        )
    }
}

export default Posture;
