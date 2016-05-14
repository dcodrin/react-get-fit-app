import React from 'react';


class SideNav extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            showSide: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleWindowClick = this.handleWindowClick.bind(this);
    }
    
    componentDidMount(){
        
        $(".scrollspy").scrollSpy();
         window.addEventListener('click', this.handleWindowClick);
    }
    
    componentWillUnmount() {
        window.removeEventListener('click', this.handleWindowClick);
    }
    
    handleWindowClick(){
        
        if(this.state.showSide){
            this.setState({showSide: false});
            
        }    
    }
    
    handleClick(e){
        e.stopPropagation();
        this.setState({
            showSide: !this.state.showSide
        });
        
    }

    render(){
       
        return(
        
        
        <div>
            <ul ref='slide-out' id="slide-out" className={this.state.showSide ? 'show-side side-nav col section table-of-contents' : 'side-nav col section table-of-contents'}>
                <li><a href="#clientInfo">Personal Information</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#initialization">Specific Questions</a></li>
                <li><a href="#initialization">Posture</a></li>
                <li><a href="#initialization">Neurological</a></li>
                <li><a href="#initialization">Movement Loss</a></li>   
                <li><a href="#initialization">Test Movements</a></li>
                <li><a href="#initialization">Static Tests</a></li>
                <li><a href="#initialization">Provisional Classification</a></li>
                <li><a href="#initialization">Principal of Management</a></li>                             
            </ul>
            <div style={this.state.showSide ? {opacity: '0', transition: 'all 0.5s'} : {transition: 'all 0.5s'}} onClick={this.handleClick}><a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="medium material-icons">list</i></a></div>
        </div>    
    
            
            
        );       
    }
}

export default SideNav;