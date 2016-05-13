import React from "react";


class Neurological extends React.Component {

  constructor(props) {
    
    super(props);
    
  }


  render() {
    
    return (
        
		<div className="neurological row container">
			<div className="neurological__firstCol col s12">
			
            	<div className="row">
               		<h1>Neurological</h1>
                 </div>
				 
				 <div className="row">
        			<div className="input-field col s12 m6 l6">
          				<textarea id="motorDeficit" className="materialize-textarea"></textarea>
          				<label for="motorDeficit">Motor Deficit</label>
        			</div>
        			<div className="input-field col s12 m6 l6">
          				<textarea id="reflexes" className="materialize-textarea"></textarea>
          				<label for="reflexes">Reflexes</label>
        			</div>					
				 </div>
				 
				 <div className="row">
        			<div className="input-field col s12 m6 l6">
          				<textarea id="sensoryDeficit" className="materialize-textarea"></textarea>
          				<label for="sensoryDeficit">Sensory Deficit</label>
        			</div>
        			<div className="input-field col s12 m6 l6">
          				<textarea id="duralSigns" className="materialize-textarea"></textarea>
          				<label for="duralSigns">Dural Signs</label>
        			</div>					
				 </div>
				 
			</div>
		</div>
         

    );
  }
}

export default Neurological;