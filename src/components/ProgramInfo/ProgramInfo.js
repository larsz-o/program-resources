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
    getProgramData = (programName) =>{
        axios({
            method: 'GET',
            url: `api/program?name=${programName}`
        }).then((response) => {
            this.setState({
                ...this.state,
                data: response.data
            }).catch((error) => {
                console.log("Error getting data", error);
            })
        })
    }
    render(){
        return(
            <div>{this.state.params}
            {JSON.stringify(this.props)}
            </div>
        )
    }
}
export default ProgramInfo; 