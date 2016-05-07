import React from 'react';
import {
    Input
}
from 'react-materialize';


class Posture extends React.Component {

    render() {
        return (
            <div>
           
            <div className='row'>
            <div className='col s3'>
            Sitting
            </div>
            <div className='col s3'>
            Standing
            </div>
            <div className='col s3'>
            Lordosis
            </div>
            <div className='col s3'>
            Lateral Shift
            </div>
            </div>
            
            <div className='row'>
                        
<div className='col s3'>
    <Input name='sitting' type='radio' value='good' label='Good' className='with-gap' />
    <Input name='sitting' type='radio' value='fair' label='Fair' className='with-gap' />
    <Input name='sitting' type='radio' value='poor' label='Poor' className='with-gap' />
</div>

<div className='col s3'>
    <Input name='standing' type='radio' value='good' label='Good' className='with-gap' />
    <Input name='standing' type='radio' value='fair' label='Fair' className='with-gap' />
    <Input name='standing' type='radio' value='poor' label='Poor' className='with-gap' />
</div>

<div className='col s3'>
    <Input name='lordosis' type='radio' value='red' label='Red' className='with-gap' />
    <Input name='lordosis' type='radio' value='acc' label='Acc' className='with-gap' />
    <Input name='lordosis' type='radio' value='normal' label='Normal' className='with-gap' />
</div>

<div className='col s3'>
    <Input name='lateralShift' type='radio' value='right' label='Right' className='with-gap' />
    <Input name='lateralShift' type='radio' value='left' label='Left' className='with-gap' />
    <Input name='lateralShift' type='radio' value='nil' label='Nil' className='with-gap' />
</div>


        <div className="row">
          <form className="col s12"/>
          <div className="row">
          <div className="col s4">
    <p class="fixme">Correction of Posture:</p><br/>
    <Input name='posture' type='radio' value='better' label='Better' className='with-gap' />
    <Input name='posture' type='radio' value='worse' label='Worse' className='with-gap' />
    <Input name='posture' type='radio' value='noEffect' label='No Effect' className='with-gap' />
        </div>
        <div className="input-field col s4 z-depth-1">
          <input id="noEffect" type="text" className="validate"/>
          <label for="noEffect">Notes: No Effect</label>
          </div>
         <div className="col s4">
             <Input name='posture' type='radio' value='relevant' label='Relevant'/>
             <Input name='posture' type='radio' value='notRelevant' label='Not Relevant' />
        </div>
        </div>
        
        <div className="row">
          <form className="col s12"/>
          <div className="input-field col s12 z-depth-1">
          <input id="otherObservations" type="text" className="validate"/>
          <label for="otherObservations">Other observations</label>
          </div>
          </div>
                        
            </div>
            </div>
            <br/>
            </div>
        )
    }
}

export default Posture;
