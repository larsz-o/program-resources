import React, { Component } from 'react'; 
import axios from 'axios'; 

class ContributeData extends Component {
    constructor(props){
        super(props);
        this.state = {
            programs: []
        }
    }
    componentDidMount(){
        this.getPrograms();
    }
    getPrograms = () =>{
        axios({
            method: 'GET', 
            url: '/api/program/names'
        }).then((response) => {
            this.setState({
                ...this.state, 
                programs: response.data
            })
        }).catch((error) => {
            console.log('Error getting program names', error);
        })
    }
    render(){
        return(
            <div>
                {this.state.programs.map((name, i) => {
                    return(
                        <p key={i}>{name.program_name}</p>
                    )
                })}
            </div>
        );
    }
}
export default ContributeData; 