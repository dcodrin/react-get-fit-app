import React from 'react';
import {Input, Icon} from 'react-materialize';

class History extends React.Component {
    
    constructor(props){

    super(props);
    
    }
    
    componentDidMount(){
    $('.datepicker').pickadate({
      selectMonths: true, 
      selectYears: 15 
    });
    
    $('select').material_select();

  }
    
    render() {
        return (
            <div className="history row container section scrollspy" id="history">
                <div className="history__firstCol col s12">
                
                    <div className="row">
                        <h1>History</h1>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="presentSymptoms" className="materialize-textarea"></textarea>
                            <label for="presentSymptoms">Present Symptoms</label>
                        </div>
                    </div>
                    
                    <div className="history__radioRow row">
                        <div className="input-field col s6">
                            <input type="date" className="datepicker" />
                            <label for="presentSice">Present Since</label>
                        </div>
                        <div className="history__radioRow__radioCol__presentSince col s6">
                            <Input name="presentSymptoms" type="radio" value="improving" label="improving" />
                            <Input name="presentSymptoms" type="radio" value="unchanging" label="unchanging" />
                            <Input name="presentSymptoms" type="radio" value="worsening" label="worsening" /> 
                        </div>
                    </div>

                    <div className="history__radioRow row">
                        <div className="input-field col s12 m8 l8">
                            <input id="symptomsResultOf" type="text" />
                            <label for="symptomsResultOf">Commenced as a Result Of</label>
                        </div>
                        <div className="history__or col s2 m1 l1">or</div>                          
                        <div className="history__radioRow__radioCol noReason col s10 m3 l3">
                            <Input name="noApparentReason" type="checkbox" value="noApparentReason" label="no apparent reason" />
                        </div>                        
                    </div>
                    
                    <div className="history__radioRow row">
                        <Input s={8} label="Symptoms at Onset"/>    
                        <div className="history__radioRow__radioCol col s4">
                            <Input name="symptomLoc1" type="radio" value="back" label="back" />
                            <Input name="symptomLoc1" type="radio" value="thigh" label="thigh" />
                            <Input name="symptomLoc1" type="radio" value="leg" label="leg" />
                        </div>                                          
                    </div>
                    
                    <div className="history__radioRow row">
                        <Input s={8} label="Constant Symptoms"/>    
                        <div className="history__radioRow__radioCol col s4">
                            <Input name="symptomLoc2" type="radio" value="back" label="back" />
                            <Input name="symptomLoc2" type="radio" value="thigh" label="thigh" />
                            <Input name="symptomLoc2" type="radio" value="leg" label="leg" />
                        </div>                                          
                    </div>
                    
                    <div className="history__radioRow row">
                        <Input s={8} label="Intermittent Symptoms"/>    
                        <div className="history__radioRow__radioCol col s4">
                            <Input name="symptomLoc3" type="radio" value="back" label="back" />
                            <Input name="symptomLoc3" type="radio" value="thigh" label="thigh" />
                            <Input name="symptomLoc3" type="radio" value="leg" label="leg" />
                        </div>                                          
                    </div>
                    
                    <div className="history__firstDivider divider"></div>
                    
                    <div className="history__betterWorse row">
                        <div className="col s12 m3 l3"><h2><span className="firstWord">Symptoms</span><br />worse</h2></div>
                        <div className="col s12 m9 l9">
                            <div className="history__betterWorse__checkRow row">
                                <Input name="symptomWorsePos" type="checkbox" value="bending" label="bending" />
                                <Input name="symptomWorsePos" type="checkbox" value="sittingRising" label="sitting/rising" />
                                <Input name="symptomWorsePos" type="checkbox" value="standing" label="standing" />
                                <Input name="symptomWorsePos" type="checkbox" value="walking" label="walking" />
                                <Input name="symptomWorsePos" type="checkbox" value="lying" label="lying" />
                            </div>
                            <div className="history__betterWorse__radioRow row">
                                    <Input name="timeWorse" type="radio" value="am" label="am" />
                                    <Input name="timeWorse" type="radio" value="progresses" label="as the day progresses" />
                                    <Input name="timeWorse" type="radio" value="pm" label="pm" />
                           </div>
                           <div className="row">
                                    <Input name="actionWorse" type="radio" value="still" label="when still" />
                                    <Input name="actionWorse" type="radio" value="onMove" label="when on the move" />                            
                           </div>
                            <div className="row">
                                <Input s={12} m={10} l={10} name="otherWorse" label="other" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="divider"></div>
                    
                    <div className="history__betterWorse row">
                        <div className="col s12 m3 l3"><h2><span className="firstWord">Symptoms</span><br />better</h2></div>
                        <div className="col s12 m9 l9">
                            <div className="row">
                                <Input name="symptomBetterPos" type="checkbox" value="bending" label="bending" />
                                <Input name="symptomBetterPos" type="checkbox" value="sittingRising" label="sitting/rising" />
                                <Input name="symptomBetterPos" type="checkbox" value="standing" label="standing" />
                                <Input name="symptomBetterPos" type="checkbox" value="walking" label="walking" />
                                <Input name="symptomBetterPos" type="checkbox" value="lying" label="lying" />
                            </div>
                            <div className="row">
                                    <Input name="timeBetter" type="radio" value="am" label="am" />
                                    <Input name="timeBetter" type="radio" value="progresses" label="as the day progresses" />
                                    <Input name="timeBetter" type="radio" value="pm" label="pm" />
                            </div>
                            <div className="row">
                                    <Input name="actionBetter" type="radio" value="still" label="when still" />
                                    <Input name="actionBetter" type="radio" value="onMove" label="when on the move" />
                           
                            </div>
                            <div className="row">
                                <Input s={12} m={10} l={10} name="otherBetter" label="other" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="divider"></div>
                    
                    <div className="history__radioRow row">
                        <div className="history__radioRow__radioCol col s12 m3 l3"><h3><span className="firstWord">Disturbed</span><br />sleep</h3></div>
                        <div className="history__radioRow__radioCol col s12 m3 l3">
                        <Input name="disturbedSleep" type="radio" value="yes" label="yes" />
                        <Input name="disturbedSleep" type="radio" value="no" label="no" />
                        </div>
                        <div className="input-field col s6 m3 l3">
                            <select multiple>
                                <option value="prone">prone</option>
                                <option value="sup">sup</option>
                                <option value="right">side, right</option>
                                <option value="left">side, left</option>      
                            </select>
                            <label>Sleeping Postures</label>
                        </div>
                        <div className="input-field col s6 m3 l3">
                            <select>
                                <option value="firm">firm</option>
                                <option value="soft">soft</option>
                                <option value="sag">sag</option>
                            </select>
                            <label>Surface</label>
                        </div>  
                    </div>
                    
                    <div className="divider"></div>
                    
                    <div className="history__radioRow row">
                        <div className="history__radioRow__prevEpisodes col s12 m3 l3"><h3><span className="firstWord">Previous</span><br />episodes</h3></div>
                        <div className="history__radioRow__radioCol col s12 m5 l5">
                            <Input name="amoutEpisodes" type="radio" value="0" label="0" />
                            <Input name="amoutEpisodes" type="radio" value="1_5" label="1 to 5" />
                            <Input name="amoutEpisodes" type="radio" value="6_10" label="6 to 10" />
                            <Input name="amoutEpisodes" type="radio" value="11plus" label="11 +" />
                        </div>
                        <Input s={12} m={3} l={3} name="yearFirstEpisode" label="Year of First Episode" />
                    </div>

                    <div className="history__lastDivider divider"></div>

                    <div className="row">
                        <div className="input-field col s12 m6 l6">
                            <textarea id="previousHistory" className="materialize-textarea"></textarea>
                            <label for="previousHistory">Previous History</label>
                        </div>
                        <div className="input-field col s12 m6 l6">
                            <textarea id="previousTreatments" className="materialize-textarea"></textarea>
                            <label for="previousTreatments">Previous Treatments</label>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
            )
    }
        
}

export default History;