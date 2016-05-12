import React from 'react';
import {Input} from 'react-materialize';

class ClientInfo extends React.Component {
  constructor(props){
    //We access functions/methods on the object's parent using the super;
    super(props);
    // bind 'this' to my App
    this.alertText = this.alertText.bind(this);
  }
  
  alertText() {
    alert("blah blah blah");
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
      <div className="clientInfo row">
        <div className="col s12">
          <h1>Client Information</h1>
          <img src="http://i236.photobucket.com/albums/ff256/Duda_Martins/Gifs%20Duda/kao08022.gif" border="0" alt="Click me! Gif photo: Click kao08022.gif" onClick={this.alertText}/>

            <div className = "row personalInfo">
              <h4>Your Name</h4>
              < div className = "question row" >
                <div className="input-field col s6">
                  <input id="firstName" type="text" class="validate"/>
                  <label for="firstName">First Name</label>
                </div>
      
                <div className="input-field col s6">
                  <input id="lastName" type="text" class="validate"/>
                  <label for="lastName">Last Name</label>
                </div>
              </div>
              
              < div className = "question row" >
                <div className="input-field col s6">
                  <label for="date">Today's Date: </label>
                  <input type="date" className="datepicker"/>
                </div> 
              
                <div className="input-field col s6">
                  <Input name='gender' type='radio' value='female' label='female' />
                  <Input name='gender' type='radio' value='male' label='male' />
                  <Input name='gender' type='radio' value='other' label='other' />
                </div>
              </div>
            </div>
            
            
            <div className = "row address">
              <h4>Your Address</h4>
              <div className = "question row">
                <div className="input-field col s12">
                  <input id="streetAddress" type="text"/>
                  <label for="streetAddress">Street Address: </label>
                </div>
              </div>
            
            <div className = "question row">
                <div className="input-field col s3">
                <input id="city" type="text"/>
                <label for="City">City: </label>
              </div>
            
              <div className="input-field col s3">
                <input id="province" type="text"/>
                <label for="province">Province: </label>
              </div>
              
              <div className="input-field col s3">
                <input id="postalCode" type="text"/>
                <label for="postalCode">Postal Code: </label>
              </div>
              
              <div className="input-field col s3">
                <label for="country">Country: </label>
                <input id="country" type="text"/>
              </div>
            </div>
          </div>

          <div className = "row phone">
            <h4>Your Contact Details</h4>
            <div className = "question row">
              <div className="input-field col s4">
                <input id="telephone" type="tel"/>
                <label for="telephone">Telephone: </label>
              </div>
  
              <div className="input-field col s4">
                <label for="dob">Date of Birth: </label>
                  <input type="date" className="datepicker"/>
              </div>
  
              <div className="input-field col s4">
                <input id="age" type="number" min="0" max="120" />
                <label for="age">Age: </label>
              </div>
            </div>
          </div>

          <div className = "row stresses">
            <h4>Your Stresses</h4>
            <div className = "question row">
              <div className="input-field col s12">
                <Input type='select' label="Select a referer">
                  <option value="gp">GP</option>
                  <option value="orth">Orth</option>
                  <option value="self">Self</option>
                  <option value="other">Other</option>
                </Input>
              </div>
            </div>
  
            <div className="question row">
              <div className="input-field col s6">
                <textarea id="workStresses" className="materialize-textarea"></textarea>
                <label for="workStresses">Work - Mechanical Stresses:</label>
              </div>
              
              <div className="input-field col s6">
                <textarea id="leisureStresses" className="materialize-textarea"></textarea>
                <label for="leisureStresses">Leisure - Mechanical Stresses:</label>
              </div>
            </div>
          </div>

          <div className = "row disability">
            <h4>Your Disability</h4>
            <div className="question row">
              <div className="input-field col s6">
                <label for="disabilityPresent">Functional Disability from present episode: </label>
                <textarea id="disabilityPresent" className="materialize-textarea"></textarea>
              </div>
              
              <div className="input-field col s3">
                <label for="disabilityScore">Functional Disability Score: </label>
                <input id="disabilityScore" type="number" min="1" max="10" />
              </div>
              
              <div className="input-field col s3">
                <label for="vas">VAS Score (0-10): </label>
                <input id="vas" type="number" min="1" max="10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientInfo;