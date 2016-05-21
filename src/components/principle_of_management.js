import React from "react";
import {Input} from "react-materialize";
import {bindActionCreators} from "redux";
import {reduxForm} from "redux-form";

import {createClientForm} from '../actions/index';

class PrincipleOfManagement extends React.Component {

    constructor(props) {

        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);

        this.state = {value: ''};

    }

    onSubmit(p){
        console.log(this.props.createClientForm(p), "THE PROPS ARE HERE");
        this.props.createClientForm(p);
    }
    handleRadio(e){
        this.setState({value: e});
    }
    render() {
        var that = this;
        const {fields: {pomEdu, pomEquip, pomMechTher, pomMechTherComment,pomExt, pomLat, pomFlex, pomOther, pomGoals}, handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="principleManagement row container section scrollspy" id="principleManagement">
                    <div className="principleManagement__firstCol col s12">

                        <div className="row">
                            <h1>Principle Of Management</h1>
                        </div>

                        <div className="row">
                            <Input s={12} m={6} l={6} label="Education" {...pomEdu}/>
                            <Input s={12} m={6} l={6} label="Equipment Provided" {...pomEquip}/>
                        </div>

                        <div className="row valign-wrapper">
                            <div className="col s6 m3 l3">
                                <h2>Mechanical Therapy</h2>
                            </div>
                            <div className="col s6 m3 l3">

                                <label value="yes" {...pomMechTher}>
                                    <Input name="mechanicalTherapy" type="radio" value="yes" label="yes" />
                                </label>
                                <label value="no" {...pomMechTher}>
                                    <Input name="mechanicalTherapy" type="radio" value="no" label="no" />
                                </label>

                            </div>
                            <Input s={12} m={6} l={6} {...pomMechTherComment}/>
                        </div>

                        <div className="row">
                            <Input s={12} m={6} l={6} label="Extension Principle" {...pomExt}/>
                            <Input s={12} m={6} l={6} label="Lateral Principle" {...pomLat} />
                        </div>

                        <div className="row">
                            <Input s={12} m={6} l={6} label="Flexion Principle" {...pomFlex}/>
                            <Input s={12} m={6} l={6} label="Other" {...pomOther}/>
                        </div>

                        <div className="row">
                            <Input s={12} label="Treatment Goals" {...pomGoals}/>
                        </div>

                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>

        );
    }
}


function validate(values) {
    console.log(values);
    const errors = {};
    !values.pomMechTher ? errors.pomMechTher = "Select yes or no" : null;
    return errors;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createClientForm}, dispatch);
}

export default reduxForm({
    form: "PrincipleOfManagement",
    fields: ["pomEdu", "pomEquip", "pomMechTher", "pomMechTherComment", "pomExt", "pomLat", "pomFlex", "pomOther", "pomGoals"],
    validate
}, null, mapDispatchToProps)(PrincipleOfManagement);
