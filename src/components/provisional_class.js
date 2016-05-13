import React from "react";
import {Input} from "react-materialize";


class ProvisionalClassification extends React.Component {

  constructor(props) {
    
    super(props);
    
  }


  render() {
    
    return (
        
        <div className="provisionalClass row container">
			<div className="provisionalClass__firstCol col s12">
			
            	<div className="row">
               		<h1>Provisional Classification</h1>
                </div> 
                
                <div className="row">
                    <Input name="provisionalClass" type="checkbox" value="derangement" label="derangement" />
                    <Input name="provisionalClass" type="checkbox" value="dysfunction" label="dysfunction" />
                    <Input name="provisionalClass" type="checkbox" value="posture" label="posture" />
                    <Input name="provisionalClass" type="checkbox" value="other" label="other" />
                </div>
                
                <div className="row">
                    <Input s={12} label="Derangement, Pain Location" />
                </div>
                
            </div>
        </div>  


    );
  }
}

export default ProvisionalClassification;