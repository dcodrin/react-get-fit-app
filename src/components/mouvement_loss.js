import React from 'react';

class MouvementLoss extends React.Component {

    constructor(props) {
        super(props);
        this.clickMe = this.clickMe.bind(this);
    }

  clickMe(){
      alert("Hey man!")
  }

    render() {
        return (


<div>
<h1>Mouvement Loss</h1>


<table>
    <tbody>
    <tr>
        <th></th>
        <th>Major</th>
        <th>Moderate</th>
        <th>Minimal</th>
        <th>Pain</th>
    </tr>
    <tr>
        <td>Flexion</td>
        <td><input type="radio" name="row-1" data-col="1"/></td>
        <td><input type="radio" name="row-1" data-col="2"/></td>
        <td><input type="radio" name="row-1" data-col="3"/></td>
        <td><input type="text" name="row-3" data-col="4"/></td>
    
    </tr>
    <tr>
        <td>Extension</td>
        <td><input type="radio" name="row-2" data-col="1"/></td>
        <td><input type="radio" name="row-2" data-col="2"/></td>
        <td><input type="radio" name="row-2" data-col="3"/></td>
        <td><input type="text" name="row-3" data-col="4"/></td>
    
    </tr>
    <tr>
        <td>Side Gliding R</td>
        <td><input type="radio" name="row-3" data-col="1"/></td>
        <td><input type="radio" name="row-3" data-col="2"/></td>
        <td><input type="radio" name="row-3" data-col="3"/></td>
        <td><input type="text" name="row-3" data-col="4"/></td>
    
    </tr>
    <tr>
        <td>Side Gliding L</td>
        <td><input type="radio" name="row-3" data-col="1"/></td>
        <td><input type="radio" name="row-3" data-col="2"/></td>
        <td><input type="radio" name="row-3" data-col="3"/></td>
        <td><input type="text" name="row-3" data-col="4"/></td>
    
    </tr>
    </tbody>
</table>
</div>
        );
    }
}


export default MouvementLoss;