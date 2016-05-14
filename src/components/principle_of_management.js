import React from "react";  
import {Input} from "react-materialize";

class PrincipleOfManagement extends React.Component {

  constructor(props) {
    
    super(props);
    
  }
		
		render() {
		
			return (

			<div className="principleManagement row container section scrollspy" id="principleManagement">
				<div className="principleManagement__firstCol col s12">
			
            		<div className="row">
               			<h1>Principle Of Management</h1>
                	</div>
					
					<div className="row">
						<Input s={12} m={6} l={6} label="Education" />
						<Input s={12} m={6} l={6} label="Equipment Provided" />
					</div>
					
					<div className="row valign-wrapper">
						<div className="col s6 m3 l3">
							<h2>Mechanical Therapy</h2>
						</div>
						<div className="col s6 m3 l3">
                            <Input name="mechanicalTherapy" type="radio" value="yes" label="yes" />
                            <Input name="mechanicalTherapy" type="radio" value="no" label="no" />
						</div>
							<Input s={12} m={6} l={6} />
					</div>

					<div className="row">
						<Input s={12} m={6} l={6} label="Extension Principle" />
						<Input s={12} m={6} l={6} label="Lateral Principle" />
					</div>

					<div className="row">
						<Input s={12} m={6} l={6} label="Flexion Principle" />
						<Input s={12} m={6} l={6} label="Other" />
					</div>

					<div className="row">
						<Input s={12} label="Treatment Goals" />
					</div>
										
				</div>
			</div> 
		  
	  );
    }
}

export default PrincipleOfManagement;