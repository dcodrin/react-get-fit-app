import React from 'react';
import Geosuggest from 'react-geosuggest';
import {Input, Icon} from 'react-materialize';

class ClientInfo extends React.Component {

    constructor(props) {
        //We access functions/methods on the object's parent using the super;
        super(props);
        this.state = {suggest: ''};

        this.onSuggestSelect = this.onSuggestSelect.bind(this);
        this.getAge = this.getAge.bind(this);
        this.onSuggestChange = this.onSuggestChange.bind(this);
    }

    // runs JS once my component has mounted
    componentDidMount() {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
    }

    onSuggestSelect(suggest) {
        console.log(suggest);
    }

    onSuggestChange(e) {
        this.setState({
            suggest: e.target.value
        })
    }

    getAge() {

    }


    render() {
        return (

            <div className="clientInfo row container">
                <div className="col s12">

                    <div className="row">
                        <div className="input-field col s6 m3 l3">
                            <label for="date">Date</label>
                            <input type="date" className="datepicker"/>
                        </div>
                        <div className="input-field col s6 m3 l3">
                            <input placeholder="File Number" type="text" id="clientInfo__fileNumber"/>
                        </div>
                    </div>

                    <div className="clientInfo__personalInfo row">
                        <h1>Personal Information</h1>
                        <div className="clientInfo__personalInfo__question row">

                            <div className="input-field col s12 m6 l6">
                                <input id="firstName" type="text"/>
                                <label for="firstName">First Name</label>
                            </div>

                            <div className="input-field col s12 m6 l6">
                                <input id="lastName" type="text"/>
                                <label for="lastName">Last Name</label>
                            </div>

                        </div>


                        <div className="clientInfo__personalInfo__question row">

                            <div className="input-field col s6 m4 l4">
                                <label for="dob">Date of Birth</label>
                                <input type="date" className="datepicker"/>
                            </div>

                            <div className="input-field col s6 m4 l4">
                                <input id="age" type="number" min="0" max="105"/>
                                <label for="age">Age</label>
                            </div>

                            <div className="input-field col s12 m4 l4">
                                <Input name='gender' type='radio' value='female' label='female'/>
                                <Input name='gender' type='radio' value='male' label='male'/>
                                <Input name='gender' type='radio' value='other' label='other'/>
                            </div>
                        </div>

                    </div>


                    <div className="clientInfo__contact row">

                        <div className="clientInfo__contact__question row">
                            <div className="col s12">
                                <Geosuggest className="col s12" update={this.state.suggest} onSuggestSelect={this.onSuggestSelect} country="ca"
                                            placeholder='Address'/>
                            </div>
                        </div>

                        <div className="clientInfo__contact__question row">
                            <Input s={12} m={6} l={6} label="Telephone" validate type="tel"><Icon>phone</Icon></Input>
                            <Input s={12} m={6} l={6} label="Email" validate type="email"><Icon>email</Icon></Input>
                        </div>
                    </div>


                    <div className="clientInfo__stresses row">
                        <h1>Stresses and Disabilities</h1>
                        <div className="clientInfo__stresses__question row">
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
                                <input id="disabilityScore" type="number" min="0" max="10"/>
                            </div>

                            <div className="input-field clientInfo__stresses__question__vas col s3">
                                <label for="vas">VAS Score (0-10)</label>
                                <input id="vas" type="number" min="0" max="10"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default ClientInfo;