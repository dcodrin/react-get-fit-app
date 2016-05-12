import React from 'react';
import {Input, Icon} from 'react-materialize';

class History extends React.Component {
    
    constructor(props){

    super(props);
    
    }
    
    componentDidMount(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }
    
        
    render() {
        return (
            <div className="history container row">
                <div className="col s12">
                
                    <div className="row">
                        <h1>History</h1>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="presentSymptoms" className="materialize-textarea"></textarea>
                            <label for="presentSymptoms">Present Symptoms</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="date" className="datepicker" />
                            <label for="presentSice">Present Since</label>
                        </div>
                        <div className="col s6">
                            <Input name="presentSymptoms" type="radio" value="improving" label="improving" />
                            <Input name="presentSymptoms" type="radio" value="unchanging" label="unchanging" />
                            <Input name="presentSymptoms" type="radio" value="worsening" label="worsening" /> 
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="date" className="datepicker" />
                            <label for="presentSice">Present Since</label>
                        </div>
                        <div className="col s6">
                            <Input name="presentSymptoms" type="radio" value="improving" label="improving" />
                            <Input name="presentSymptoms" type="radio" value="unchanging" label="unchanging" />
                            <Input name="presentSymptoms" type="radio" value="worsening" label="worsening" /> 
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
            )
    }
        
}

export default History;