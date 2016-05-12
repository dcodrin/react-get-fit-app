import React from 'react';
import {Input} from 'react-materialize';

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
    <tbody >
    <tr>
        <th></th>
        <th>Major</th>
        <th>Moderate</th>
        <th>Minimal</th>
        <th>Describe pain</th>
    </tr>
    <tr>
        <td>Flexion</td>
        <td><Input name='group1' type='radio' value='red' label=' '/></td>
        <td><Input name='group1' type='radio' value='yellow' label=' ' /></td>
        <td><Input name='group1' type='radio' value='green' label=' '/></td>
        <td><Input name='group1' type='text'/></td>
    </tr>
    <tr>
        <td>Extension</td>
        <td><Input name='group2' type='radio' value='red1' label=' '/></td>
        <td><Input name='group2' type='radio' value='yellow1' label=' ' /></td>
        <td><Input name='group2' type='radio' value='green1' label=' '/></td>
        <td><Input name='group2' type='text'/></td>
    </tr>
    <tr>
        <td>Side Gliding R</td>
        <td><Input name='group3' type='radio' value='red3' label=' '/></td>
        <td><Input name='group3' type='radio' value='yellow3' label=' ' /></td>
        <td><Input name='group3' type='radio' value='green3' label=' '/></td>
        <td><Input name='group3' type='text'/></td>
    </tr>
    <tr>
        <td>Side Gliding L</td>
        <td><Input name='group4' type='radio' value='red4' label=' '/></td>
        <td><Input name='group4' type='radio' value='yellow4' label=' ' /></td>
        <td><Input name='group4' type='radio' value='green4' label=' '/></td>
        <td><Input name='group4' type='text'/></td>
    </tr>
    </tbody>
</table>

<video id="background-video" loop autoPlay>
  <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4"/>
  <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
</div>
        );
    }
}


export default MouvementLoss;