import React from 'react';
import {Input, Icon} from 'react-materialize';

class During extends React.Component {
    render(){
        return (
                <td>
                    <Input type = "select" s={12}>
                        <option value="1">no effect</option>
                        <option value="2">produces</option>
                        <option value="3">abolishes</option>
                        <option value="4">increases</option>
                        <option value="5">decreases</option>
                        <option value="6">centralising</option>
                        <option value="7">peripheralising</option>
                    </Input>
                </td>
        );
    }
}

class After extends React.Component {
    render(){
        return (
                <td>
                    <Input type ="select" s={12}>
                        <option value="1">no effect</option>
                        <option value="2">better</option>
                        <option value="3">worse</option>
                        <option value="4">no better</option>
                        <option value="5">no worse</option>
                        <option value="6">centralised</option>
                        <option value="7">peripheralised</option>
                    </Input>
                </td>
        );
    }
}

class MechanicalRes extends React.Component {
    render (){
        return (
                <td>
                    <Input name={"mechRes"+this.props.row} type='radio' value='upRom' label = {<span><span className = "upArrow">↑</span>rom</span>} />
                    <Input name={"mechRes"+this.props.row} type='radio' value='downRom' label={<span><span className = "downArrow">↓</span>rom</span>} />
                    <Input name={"mechRes"+this.props.row} type='radio' value='NoEff' label='no effect' />
                </td>
            
            );
    }
}

class TestMovements extends React.Component {
    
    constructor(props){

    super(props);
    
    }
    
    render() {

        
        return (
            
            <div className = "row container section scrollspy" id="testMovements">
            <div className="col s12">
                
			<div className="row">
				<span className = "title">Test Movements</span> <span className = "subtitle">describe effect on present pain</span>
			</div>
            
            
            <table className = "symptomsTable">
                <thead>
                <tr>
                    <th className = "symptoms"></th>
                    <th className = "during">Symptoms During Testing</th>
                    <th className = "after">Symptoms After Testing</th>
                    <th className = "mech">Mechanical Response</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td className = "sectionTitle">Pretest Symptoms Standing</td></tr>
                <tr>
                    <td className = "symptom">FIS</td>
                    <During />
                    <After />
                    <MechanicalRes row={1}/> 
                </tr>
                <tr>
                    <td className = "symptom">Rep FIS</td>
                    <During />
                    <After />
                    <MechanicalRes row={2}/> 
                </tr>
                <tr>
                    <td className = "symptom">EIS</td>
                    <During />
                    <After />
                    <MechanicalRes row={3}/> 
                </tr>
                <tr>
                    <td className = "symptom">Rep EIS</td>
                    <During />
                    <After />
                    <MechanicalRes row={4}/> 
                </tr>
                <tr>
                <td className = "sectionTitle">Pretest Symptoms Lying</td></tr>
                <tr>
                    <td className = "symptom">FIL</td>
                    <During />
                    <After />
                    <MechanicalRes row={5}/> 
                </tr>
                <tr>
                    <td className = "symptom">Rep FIL</td>
                    <During />
                    <After />
                    <MechanicalRes row={6}/> 
                </tr>
                <tr>
                    <td className = "symptom">EIL</td>
                    <During />
                    <After />
                    <MechanicalRes row={7}/> 
                </tr>
                <tr>
                    <td className = "symptom">Rep EIL</td>
                    <During />
                    <After />
                    <MechanicalRes row={8}/> 
                </tr>
                <tr>
                <td className = "sectionTitle">Pretest Symptoms (if required)</td></tr>
                <tr>
                    <td className = "symptom">SGIS - R</td>
                    <During />
                    <After />
                    <MechanicalRes row={9}/> 
                </tr>
                <tr>
                    <td className = "symptom">Rep SGIS - R</td>
                    <During />
                    <After />
                    <MechanicalRes row={10}/> 
                </tr>
                <tr>
                    <td className = "symptom">SGIS - L</td>
                    <During />
                    <After />
                    <MechanicalRes row={11}/> 
                </tr>
                <tr>
                    <td className = "symptom">Rep SGIS - L</td>
                    <During />
                    <After />
                    <MechanicalRes row={12}/> 
                </tr>
                </tbody>
                </table>
            </div>
			</div>
            
        );
    }
}

export default TestMovements;


 