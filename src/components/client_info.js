import React from 'react';
import Geosuggest from 'react-geosuggest';
import {Input, Icon} from 'react-materialize';

class ClientInfo extends React.Component {

    constructor(props) {
        //We access functions/methods on the object's parent using the super;
        super(props);
        this.state = {suggest: '', currentDate: '', age: ''};

        this.onSuggestSelect = this.onSuggestSelect.bind(this);
        this.onSuggestChange = this.onSuggestChange.bind(this);
        this.setupDatepicker = this.setupDatepicker.bind(this);
    }

    componentDidMount() {
        this.setupDatepicker('agepicker');
        this.setupDatepicker('datepicker');
    }

    setupDatepicker(source) {
        const that = this;
        const dateInput = source ? this.refs[source] : null;

        //Set the maximum year to two years from current year
        let date = new Date();
        date.setFullYear(date.getFullYear() + 2);

        function calculateAge(birthday){
            const ageDiff = Date.now() - birthday.getTime();
            const ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        let map = {
            agepicker: 'age',
            datepicker: 'currentDate'
        };

        $(dateInput).pickadate({
            max: date,
            selectYears: 100,
            selectMonths: true,
            closeOnSelect: true,
            onClose: function(){
            that.setState({
                [map[source]]: source === 'agepicker' ? calculateAge(new Date(dateInput.value)) : dateInput.value
            });

            }
        });
    }

    onSuggestSelect(suggest) {
        console.log(suggest);
    }

    onSuggestChange(e) {
        this.setState({
            suggest: e.target.value
        });
    }

    render() {
        return (

            <div className="clientInfo row container section scrollspy" id="clientInfo">
                <div className="clientInfo__firstCol col s12">

                    <div className="clientInfo row">
                        <div className="input-field col s6 m3 l3 rmLP ">
                            <label className="rmLP" for="date">Date</label>
                            <input ref="datepicker" type="date" className="datepicker"/>
                        </div>
                        <div className="input-field col s6 m3 l3">
                            <input placeholder="File Number" type="text" id="clientInfo__fileNumber"/>
                        </div>
                    </div>


                    <div className="clientInfo__personalInfo row">
                        <h1>Personal Information</h1>
                        <div className="clientInfo__personalInfo__question row">
                            <Input id="firstName" type="text" s={12} m={6} l={6} label="First Name"/>
                            <Input id="lastName" type="text" s={12} m={6} l={6}  label="Last Name"/>
                        </div>

                        <div className="clientInfo__personalInfo__question row">
                            <div className="input-field col s6 m3 l3">
                                <input ref="agepicker" type="date" className="datepicker"/>
                                <label className="active" for="dob">Date of Birth</label>
                            </div>

                            <div className="input-field col s6 m3 l3">
                                <input value={this.state.age} id="age" />
                                <label className="active" for="age">Age</label>
                            </div>

                            <div className="input-field col s12 m6 l6">
                                <Input name='gender' type='radio' value='female' label='female'/>
                                <Input name='gender' type='radio' value='male' label='male'/>
                                <Input name='gender' type='radio' value='other' label='other'/>
                            </div>
                        </div>

                        <div className="clientInfo__contact__question row">
                            <div className="col s12">
                                <Geosuggest className="col s12 rmLP" update={this.state.suggest}
                                            onSuggestSelect={this.onSuggestSelect} country="ca"
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
                            <div className="input-field col rmLP">
                                <Input s={12} type='select' label="Referral">
                                    <option value="gp">GP</option>
                                    <option value="orth">Orth</option>
                                    <option value="self">Self</option>
                                    <option value="other">Other</option>
                                </Input>
                            </div>
                        </div>

                        <div className="clientInfo__stresses__question row">
                            <div className="input-field col s12 m6">
                                <textarea id="workStresses" className="materialize-textarea"/>
                                <label for="workStresses">Work - Mechanical Stresses</label>
                            </div>

                            <div className="input-field col s12 m6">
                                <textarea id="leisureStresses" className="materialize-textarea"/>
                                <label for="leisureStresses">Leisure - Mechanical Stresses</label>
                            </div>
                        </div>

                        <div className="clientInfo__stresses__question valign-wrapper vbalign row">
                            <div className="input-field col s12 m6">
                                <label for="disabilityPresent">Functional Disability from present episode</label>
                                <textarea id="disabilityPresent" className="materialize-textarea"/>
                            </div>

                            <div className="input-field clientInfo__stresses__question__fds col s6 m3">
                                <label for="disabilityScore">Functional Disability Score</label>
                                <input id="disabilityScore" type="number"/>
                            </div>

                            <div className="input-field clientInfo__stresses__question__vas col s6 m3">
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