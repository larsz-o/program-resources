import React, { Component } from 'react';
import axios from 'axios'; 

class ProgramInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            params: '', 
            data: []
        }
    }
    componentDidMount(){
        const { match: { params } } = this.props;
        let program = params.program;
        this.setState({
            ...this.state, 
            params: program
        })
        this.getProgramData(program);
    }
    // gets data for whichever program is entered in the URL params
    getProgramData = (programName) =>{
        axios({
            method: 'GET',
            url: `api/program?name=${programName}`,
        }).then((response) => {
            this.setState({
                ...this.state,
                data: response.data
            })
        }).catch((error) => {
                console.log("Error getting data", error);
            })
        
    }
    render(){
        return(
            <div>
                
            {/* if nothing is in the data array in state, display an error message */}
            {this.state.data.length > 0 ? (
            <div> 
            <h3>{this.state.data[0].program_name}</h3>
            <a href={`https://www.brandeis.edu/gps/student-courses/programs/listings/${this.state.data[0].url}.html`} target="_blank">Program requirements </a>
            
            </div>):(<h3>Nothing here</h3>)}
            </div>
        )
    }
}
export default ProgramInfo; 