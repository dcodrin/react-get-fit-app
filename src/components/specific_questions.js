import React from "react";
import {Input, Icon} from 'react-materialize';

class SpecificQuestions extends React.Component {

    constructor(props) {

        super(props);

    }


    render() {
        return (
            <div className="specificQuestions row container section scrollspy" id="specificQuestions">
                <div className="col s12">
                    <div className="row">
                        <h1>Specific Questions</h1>
                    </div>
                    
                    <div className="specificQuestions__checkRow row valign-wrapper">
                        <Input name="specificQuestions" type="checkbox" value="cough" label="cough" />
                        <Input name="specificQuestions" type="checkbox" value="sneeze" label="sneeze" />
                        <Input name="specificQuestions" type="checkbox" value="strain" label="strain" />
                        <Input name="specificQuestions" type="checkbox" value="+ve" label="+ve" />
                        <Input name="specificQuestions" type="checkbox" value="-ve" label="-ve" />
                    </div>
                    
                    <div className="specificQuestions__bladderGait row">
                        <div className="specificQuestions__bladderGait__bladder valign-wrapper col s12 m6 l6">
                            <h2>Bladder</h2>
                            <Input name="bladder" type="radio" value="normal" label="normal" />
                            <Input name="bladder" type="radio" value="abnormal" label="abnormal" />
                        </div>
                        <div className="specificQuestions__bladderGait__gait valign-wrapper col s12 m6 l6">
                            <h2>Gait</h2>
                            <Input name="gait" type="radio" value="normal" label="normal" />
                            <Input name="gait" type="radio" value="abnormal" label="abnormal" />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s12 m6 l6">
                            <select multiple>
                                <option value="none">none</option>
                                <option value="NSAIDS">NSAIDS</option>
                                <option value="analgesics">analgesics</option>
                                <option value="steroids">steroids</option>
                                <option value="anticoagulants">anticoagulants</option>
                            </select>
                            <label>Medications</label>
                        </div>
                        <Input s={12} m={6} l={6} label="Other Medications, if applicable" />
                    </div>
                    
                    <div className="row valign-wrapper">
                        <div className="col s12 m3 l2"><h2>General Health</h2></div>
                        <div className="col s12 m4 l4">
                        <Input name="genHealth" type="radio" value="good" label="good" />
                        <Input name="genHealth" type="radio" value="fair" label="fair" />
                        <Input name="genHealth" type="radio" value="poor" label="poor" />
                        </div>
                        <Input s={12} m={5} l={6}/>
                    </div>
                    
                    <div className="row valign-wrapper">
                        <div className="col s12 m3 l2"><h2>Imaging</h2></div>
                        <div className="col s12 m3 l3">
                        <Input name="imaging" type="radio" value="yes" label="yes" />
                        <Input name="imaging" type="radio" value="no" label="no" />
                        </div>
                        <Input s={12} m={6} l={7}  />
                    </div>
                        
                    <div className="row valign-wrapper">
                        <div className="col s12 m3 l2"><h2>Recent or Major Surgery</h2></div>
                        <div className="col s12 m3 l3">
                        <Input name="surgery" type="radio" value="yes" label="yes" />
                        <Input name="surgery" type="radio" value="no" label="no" />
                        </div>
                        <Input s={12} m={6} l={7} />
                    </div>
                    
                    <div className="row valign-wrapper">
                        <div className="col s12 m3 l2"><h2>Night Pain</h2></div>
                        <div className="col s12 m3 l3">
                        <Input name="nightPain" type="radio" value="yes" label="yes" />
                        <Input name="nightPain" type="radio" value="no" label="no" />
                        </div>
                        <Input s={12} m={6} l={7}  />
                    </div>
                    
                    <div className="row valign-wrapper">
                        <div className="col s12 m3 l2"><h2>Accidents</h2></div>
                        <div className="col s12 m3 l3">
                        <Input name="nightPain" type="radio" value="yes" label="yes" />
                        <Input name="nightPain" type="radio" value="no" label="no" />
                        </div>
                        <Input s={12} m={6} l={7}  />
                    </div>

                    <div className="row valign-wrapper">
                        <div className="col s12 m3 l2"><h2>Unexplained Weight Loss</h2></div>
                        <div className="col s12 m3 l3">
                        <Input name="nightPain" type="radio" value="yes" label="yes" />
                        <Input name="nightPain" type="radio" value="no" label="no" />
                        </div>
                        <Input s={12} m={6} l={7} />
                    </div>
                    
                    <div className="row valign-wrapper">        
                        <Input s={12} label="Any Additional Information" />            
                   </div>
            </div>
        </div>


        );
    }
}

export default SpecificQuestions;