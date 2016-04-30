import React from 'react';

//my first component created with react

class TestMovements extends React.Component {
    
    constructor(props){
    //We access function on the object's parent using the super;
    super(props);
    
    this.showText = this.showText.bind(this);
    }
    
    showText() {
        alert('wassup');
    }
    
    render() {
        return (
            <div>
                <table className = "symptomsTable">
                <caption className = "title"> Test Movements <br /> 
                Describe effect on present pain</caption>
                <thead>
                <tr>
                    <th></th>
                    <th rowSpan = "2" width = "50px">Symptoms During Testing</th>
                    <th rowSpan = "2" width = "50px">Symptoms After Testing</th>
                    <th colSpan = "3">Mechanical Response</th>
                </tr>
                <tr>
                <th></th>
                <th>upRom</th>
                <th>downRom</th>
                <th>No Effect</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td colSpan = "6" className = "sectionTitle">Pretest symptoms standing</td></tr>
                <tr>
                    <td className = "symptom">FIS</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox" /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                    <td className = "symptom">Rep FIS</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                    <td className = "symptom">EIS</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                    <td className = "symptom">Rep EIS</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                <td colSpan = "6" className = "sectionTitle">Pretest symptoms lying</td></tr>
                <tr>
                    <td className = "symptom">FIL</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                    <td className = "symptom">Rep FIL</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                    <td className = "symptom">EIL</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                    <td className = "symptom">Rep EIL</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                <td colSpan = "6" className = "sectionTitle">If required pretest symptoms</td></tr>
                <tr>
                    <td className = "symptom">SGIS - R</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                    <td className = "symptom">Rep SGIS - R</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                    <td className = "symptom">SGIS - L</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                <tr>
                    <td className = "symptom">Rep SGIS - L</td>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                    <td><input type = "checkbox"/></td>
                </tr>
                </tbody>
                </table>
                <button onClick={this.showText}>CLICK ME IF YOU DARE</button>
                <div>
                    Marie
                </div>
            </div>
        );
    }
}

export default TestMovements;