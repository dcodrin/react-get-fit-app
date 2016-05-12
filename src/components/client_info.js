import React from 'react';
import {Input, Icon} from 'react-materialize';

class ClientInfo extends React.Component {
  
  constructor(props){
    //We access functions/methods on the object's parent using the super;
    super(props);
    // bind 'this' to my App
    //this.alertText = this.alertText.bind(this);
  }
  
  // runs JS once my component has mounted
  componentDidMount(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }
  
  

  render() {
    return (
    
      <div className="clientInfo row container">
        <div className="col s12">
          
            <div className="row">
              <div className="input-field col s12 m3 l3">
                <label for="date">Date</label>
                <input type="date" className="datepicker"/>
              </div> 
            </div>
              
            <div className = "clientInfo__personalInfo row">
              <h2>Personal Information</h2>
              <div className = "clientInfo__personalInfo__question row">
                
                <div className="input-field col s12 m6 l6">
                  <input id="firstName" type="text" class="validate"/>
                  <label for="firstName">First Name</label>
                </div>
      
                <div className="input-field col s12 m6 l6">
                  <input id="lastName" type="text" class="validate"/>
                  <label for="lastName">Last Name</label>
                </div>
                
              </div>
              
              
              <div className = "clientInfo__personalInfo__question row">

                <div className="input-field col s6 m4 l4">
                  <label for="dob">Date of Birth</label>
                  <input type="date" className="datepicker"/>
                </div>
  
                <div className="input-field col s6 m4 l4">
                  <input id="age" type="number" min="0" max="105" />
                  <label for="age">Age</label>
                </div>
              
                <div className="input-field col s12 m4 l4">
                  <Input name='gender' type='radio' value='female' label='female' />
                  <Input name='gender' type='radio' value='male' label='male' />
                  <Input name='gender' type='radio' value='other' label='other' />
                </div>
              </div>
              
            </div>
            
            
            <div className = "clientInfo__contact row">

              <div className = "clientInfo__contact__question row">
                <div className="input-field col s12">
                  <input id="streetAddress" type="text"/>
                  <label for="streetAddress">Address</label>
                </div>
              </div>
              
              <div className = "clientInfo__contact__question row">
                <Input s={12} m={6} l={6} label="Telephone" validate type="tel"><Icon>phone</Icon></Input>
                <Input s={12} m={6} l={6} label="Email" validate type="email"><Icon>email</Icon></Input>
              </div>              
            </div>


          <div className = "clientInfo__stresses row">
            <h2>Stresses and Disabilities</h2>
            <div className = "clientInfo__stresses__question row">
              <div className="input-field col s12">
                <Input type='select' label="Referral">
                  <option value="gp">GP</option>
                  <option value="orth">Orth</option>
                  <option value="self">Self</option>
                  <option value="other">Other</option>
                </Input>
              </div>
            </div>
  
            <div className="clientInfo__stresses__question row">
              <div className="input-field col s6">
                <textarea id="workStresses" className="materialize-textarea"></textarea>
                <label for="workStresses">Work - Mechanical Stresses</label>
              </div>
              
              <div className="input-field col s6">
                <textarea id="leisureStresses" className="materialize-textarea"></textarea>
                <label for="leisureStresses">Leisure - Mechanical Stresses</label>
              </div>
            </div>
            
            <div className="clientInfo__stresses__question row">
              <div className="input-field col s6">
                <label for="disabilityPresent">Functional Disability from present episode</label>
                <textarea id="disabilityPresent" className="materialize-textarea"></textarea>
              </div>
              
              <div className="input-field clientInfo__stresses__question__fds col s3">
                <label for="disabilityScore">Functional Disability Score</label>
                <input id="disabilityScore" type="number" min="0" max="10" />
              </div>
              
              <div className="input-field clientInfo__stresses__question__vas col s3">
                <label for="vas">VAS Score (0-10)</label>
                <input id="vas" type="number" min="0" max="10" />
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      
    );
  }
}

export default ClientInfo;