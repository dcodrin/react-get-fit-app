import React from 'react';

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
  render() {
    return (
      <div className="clientInfo">
        <div className="central">
          <h1>Client Information</h1>
          <img src="http://i236.photobucket.com/albums/ff256/Duda_Martins/Gifs%20Duda/kao08022.gif" border="0" alt="Click me! Gif photo: Click kao08022.gif" onClick={this.alertText}/>

          <div className="question">
            <label for="date">Date: </label>
            <span><input id="date" type="date" placeholder="today's date"/></span>
          </div>
          
          <div className="question">
            <label for="name">Name: </label>
            <input id="name" type="text" placeholder="first name and last name"/>
          </div>
          
          <div className="question">
            <label for="gender">Gender: </label>
            <input type="radio" name="gender" value="Male" /> Male
            <input type="radio" name="gender" value="Female" /> Female
            <input type="radio" name="gender" value="Other" /> Other
          </div>
          
          <div className="question">
            <label for="streetAddress">Street Address: </label>
            <input id="address" type="text"/>
          </div>
          
          <div className="question">
            <label for="City">City: </label>
            <input id="city" type="text"/>
          </div>
          
          <div className="question">
            <label for="Province">Province: </label>
            <input id="province" type="text"/>
          </div>
          
          <div className="question">
            <label for="postalCode">Postal Code: </label>
            <input id="postalcode" type="text"/>
          </div>
          
          <div className="question">
            <label for="country">Country: </label>
            <input id="country" type="text"/>
          </div>
          
          <div className="question">
            <label for="telephone">Telephone: </label>
            <input id="telephone" type="tel"/>
          </div>
          
          <div className="question">
            <label for="dob">Date of Birth: </label>
            <input id="dob" type="date"/>
          </div>
          
          <div className="question">
            <label for="age">Age: </label>
            <input id="age" type="number" min="0" max="120" />
          </div>
          
          <div className="question">
            <label for="referral">Referral from: </label>
            <select>
              <option value="gp">GP</option>
              <option value="orth">Orth</option>
              <option value="self">Self</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="question">
            <label for="workStresses">Work - Mechanical Stresses: </label>
            <input id="workStresses" type="textarea"/>
          </div>
          
          <div className="question">
            <label for="leisureStresses">Leisure - Mechanical Stresses: </label>
            <input id="leisureStresses" type="textarea"/>
          </div>
          
          <div className="question">
            <label for="disabilityPresent">Functional Disability from present episode: </label>
            <input id="disabilityPresent" type="text"/>
          </div>
          
          <div className="question">
            <label for="disabilityScore">Functional Disability Score: </label>
            <input id="disabilityScore" type="text"/>
          </div>
          
          <div className="question">
            <label for="vas">VAS Score (0-10): </label>
            <input id="vas" type="number" min="1" max="10" />
          </div>
        </div>
      </div>
    );
  }
}

export default ClientInfo;