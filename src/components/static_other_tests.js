import React from "react";
import {Input} from "react-materialize";


class StaticOtherTests extends React.Component {

  constructor(props) {
    
    super(props);
    
  }


  render() {
    
    return (
        
        <div className="staticOtherTests row container">
			<div className="staticOtherTests__firstCol col s12">
			
            	<div className="row">
               		<h1>Static Tests</h1>
                </div> 
                
                <div className="row">
                    <Input s={12} m={6} l={6} label="Sitting Slouched" />
                    <Input s={12} m={6} l={6} label="Sitting Erect" />
                </div>
                
                <div className="row">
                    <Input s={12} m={6} l={6} label="Standing Slouched" />
                    <Input s={12} m={6} l={6} label="Standing Erect" />
                </div>
                
                <div className="row">
                    <Input s={12} m={6} l={6} label="Lying Prone in Extension" />
                    <Input s={12} m={6} l={6} label="Long Sitting" />
                </div>                
               
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="otherTests" className="materialize-textarea"></textarea>
                        <label for="otherTests">Other Tests</label>
                    </div>
                </div> 
                
            </div>   
        </div>

    );
  }
}

export default StaticOtherTests;