import React, { Component } from 'react';
import axios from 'axios'; 

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            programs: []
        }
    }
    componentDidMount(){
        this.getPrograms();
    }
    getPrograms = () => {
        axios({
            method: 'GET', 
            url: 'api/program/names'
        }).then((response) => {
            this.setState({
                programs: response.data
            });
        }).catch((error) => {
            console.log('Error getting programs', error);
        })
    }
    render(){
        return(
            <div className="full-height">
                <div className="flex-box-center">
                        <div className="col-5 flex-box-image">
                            <h2 className="title">Select a program</h2>
                        </div>
                        <div className="col-7">
                            <ul>
                            {this.state.programs.map((program, i) => {
                                return(<li key={i}><a href={`/#/program/${program.url}`}>{program.program_name}</a></li>);
                            })}
                            </ul>
                        </div>
                    </div>
            </div>
        );
    }
}
export default HomePage;