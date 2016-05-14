import React from "react";
import {Input} from "react-materialize";


class Posture extends React.Component {

    constructor(props) {
        
        super(props);

    }
    
    render() {
        return (
            
             <div className="posture row container section scrollspy" id="posture">
                <div className="posture__firstCol col s12">
                    <div className="row">
                        <h1>Posture</h1>
                    </div>
                    
                    <div className="row valign-wrapper">
                        <div className="col s6 m3 l2">
                            <h2>Sitting</h2>
                        </div>
                        <div className="col s6 m3 l4">
                            <Input name="sitting" type="radio" value="good" label="good" />
                            <Input name="sitting" type="radio" value="fair" label="fair" />
                            <Input name="sitting" type="radio" value="poor" label="poor" />                            
                        </div>
                        <div className="col s6 m3 l2 valign-wrapper">
                            <h2>Standing</h2>
                        </div>
                        <div className="col s6 m3 l4">
                            <Input name="standing" type="radio" value="good" label="good" />
                            <Input name="standing" type="radio" value="fair" label="fair" />
                            <Input name="standing" type="radio" value="poor" label="poor" />                            
                        </div>                          
                    </div>

                    <div className="row valign-wrapper">
                        <div className="col s6 m3 l2">
                            <h2>Lordosis</h2>
                        </div>
                        <div className="col s6 m9 l10">
                            <Input name="sitting" type="radio" value="reduced" label="reduced" />
                            <Input name="sitting" type="radio" value="accentuated" label="accentuated" />
                            <Input name="sitting" type="radio" value="normal" label="normal" />                                            
                        </div>                        
                    </div>
                    
                    <div className="row valign-wrapper">
                        <div className="col s6 m3 l2">
                            <h2>Correction of Posture</h2>
                        </div>
                        <div className="col s6 m3 l4">
                            <Input name="correctionPosture" type="radio" value="better" label="better" />
                            <Input name="correctionPosture" type="radio" value="worse" label="worse" />
                            <Input name="correctionPosture" type="radio" value="no effect" label="no effect" /> 
                        </div> 
                        <Input s={12} m={6} l={6} />                                                 
                    </div>
                    
                    <div className="row valign-wrapper">
                        <div className="col s6 m9 l10">
                            <h3>Relevant</h3>
                        </div>
                        <div className="col s6 m3 l3">
                            <Input name="relevantPosture" type="radio" value="yes" label="yes" />
                            <Input name="relevantPosture" type="radio" value="yes" label="no" />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="observationsPosture" className="materialize-textarea"></textarea>
                            <label for="observationsPosture">Other Observations</label>
                        </div>
                    </div>                    
                                        
                </div>
            </div>


        )
    }
}

export default Posture;
