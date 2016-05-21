import React from 'react';
import {Input} from 'react-materialize';

class MouvementLoss extends React.Component {

    constructor(props) {
        
        super(props);

    }

    render() {
        return (
            <div className="movementLoss row container section scrollspy" id="movementLoss">
                <div className="movementLoss_firstCol col s12">
                
                    <div className="row"><h1>Movement Loss</h1></div>
                    <table className="responsive-table">
                        <tbody>
                            <tr>
                                <th className="title"></th>
                                <th>Major</th>
                                <th>Moderate</th>
                                <th>Minimal</th>
                                <th>No Loss</th>
                                <th>Describe Pain</th>
                            </tr>
                            
                            <tr>
                                <td className="title"><h3>Flexion</h3></td>
                                <td><Input name="flexion" type="radio" value="maj" label=" "/></td>
                                <td><Input name="flexion" type="radio" value="mod" label=" "/></td>
                                <td><Input name="flexion" type="radio" value="min" label=" "/></td>
                                <td><Input name="flexion" type="radio" value="nil" label=" "/></td>
                                <td><Input/></td>
                            </tr>

                            <tr>
                                <td className="title"><h3>Extension</h3></td>
                                <td><Input name="extension" type="radio" value="maj" label=" "/></td>
                                <td><Input name="extension" type="radio" value="mod" label=" "/></td>
                                <td><Input name="extension" type="radio" value="min" label=" "/></td>
                                <td><Input name="extension" type="radio" value="nil" label=" "/></td>
                                <td><Input /></td>
                            </tr>

                            <tr>
                                <td className="title"><h3>Side Gliding R</h3></td>
                                <td><Input name="sideGlidingR" type="radio" value="maj" label=" "/></td>
                                <td><Input name="sideGlidingR" type="radio" value="mod" label=" "/></td>
                                <td><Input name="sideGlidingR" type="radio" value="min" label=" "/></td>
                                <td><Input name="sideGlidingR" type="radio" value="nil" label=" "/></td>
                                <td><Input /></td>
                            </tr>
                            
                            <tr>
                                <td className="title"><h3>Side Gliding L</h3></td>
                                <td><Input name="sideGlidingL" type="radio" value="maj" label=" " /></td>
                                <td><Input name="sideGlidingL" type="radio" value="mod" label=" "/></td>
                                <td><Input name="sideGlidingL" type="radio" value="min" label=" "/></td>
                                <td><Input name="sideGlidingL" type="radio" value="nil" label=" "/></td>
                                <td><Input /></td>
                            </tr>                                   
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default MouvementLoss;