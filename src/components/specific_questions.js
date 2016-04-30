import React from 'react';

class SpecificQuestions extends React.Component {

    constructor(props) {
        //We access function on the object's parent using the super;
        super(props);

        this.popUp = this.popUp.bind(this);
    }

    popUp() {
        alert("sadfsadfasdfwefewrfre");
    }
    render() {
        return (
            <div className="specific_questions">
                <p>
                    Cough<input type="checkbox" name="conditions" value="Cough"/>
                    Sneeze<input type="checkbox" name="conditions" value="Sneeze"/>
                    Strain<input type="checkbox" name="conditions" value="Strain"/>
                    +ve<input type="checkbox" name="conditions" value="plus_ve"/>
                    -ve<input type="checkbox" name="conditions" value="minus_ve"/>
                </p>
                <p>
                    Bladder: normal<input type="radio" name="Bladder" value="bladder_normal"/>
                    abnormal<input type="radio" name="Bladder" value="bladder_abnormal"/>
                    </p>
                    <p>
                    Medications: Nil<input type="checkbox" name="Medications" value="Nil"/>
                    NSAIDS<input type="checkbox" name="Medications" value="NSAIDS"/>
                    Analg<input type="checkbox" name="Medications" value="Analg"/>
                    Steroids<input type="checkbox" name="Medications" value="Steroids"/>
                    Anticoag<input type="checkbox" name="Medications" value="Anticoag"/>
                    Other<input type="text" name="Medications"/>
                </p>
                <p>
                    General Health:
                    Good <input type="radio" name="General_health" value="Good"/>
                    Fair<input type="radio" name="General_health" value="Fair"/>
                    Poor<input type="radio" name="General_health" value="Poor"/>
                    <input type="text" name="General_health"/>
                </p>
                <p>
                    Imaging: Yes<input type="radio" name="Imaging" value="yes"/>
                    No<input type="radio" name="Imaging" value="no"/>
                    <input type="text" name="Imaging"/>
                </p>
                <p>
                    Recent or major surgery: Yes<input type="radio" name="Maj_Surgery" value="yes"/>
                    No<input type="radio" name="Maj_Surgery" value="no"/>
                    <input type="text" name="Maj_Surgery"/>
                </p>
                <p>
                    Accidents: Yes<input type="radio" name="Accidents" value="yes"/>
                    No<input type="radio" name="Accidents" value="no"/>
                    <input type="text" name="Accidents"/>
                </p>
                <p>
                    Other: <input type="text" name="Other"/>
                </p>
                <button onClick={this.popUp}>
                here
                </button>
        
        </div>


        );
    }
}

export default SpecificQuestions;