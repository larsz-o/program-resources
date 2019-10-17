import React, { Component } from 'react';
import axios from 'axios';
import CardContainer from '../CardContainer/CardContainer';

class ProgramInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params: '',
            data: [],
            resources: [],
            categories: []
        }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        let program = params.program;
        this.setState({
            ...this.state,
            params: program
        })
        this.getCategories();
        this.getProgramData(program);
    }
    getCategories = () => {
        axios({
            method: 'GET',
            url: 'api/program/categories'
        }).then((response) => {
            this.setState({
                ...this.state,
                categories: response.data
            })
        }).catch((error) => {
            console.log('Error getting categories', error);
        })
    }
    getResources = (id) => {
        axios({
            method: 'GET',
            url: `api/program/resources?id=${id}`
        }).then((response) => {
            this.setState({
                ...this.state,
                resources: response.data
            });
        }).catch((error) => {
            console.log('Error getting content', error);
        })
    }
    // gets data for whichever program is entered in the URL params
    getProgramData = (programName) => {
        axios({
            method: 'GET',
            url: `api/program?name=${programName}`,
        }).then((response) => {
            this.setState({
                ...this.state,
                data: response.data
            });
            this.getResources(response.data[0].id);
        }).catch((error) => {
            console.log("Error getting data", error);
        })
    }
    render() {
        return (
            <div className="full-height">

                {/* if nothing is in the data array in state, display an error message */}
                {this.state.data.length > 0 ? (
                    <div className="flex-box-center">
                        <div className="col-5 flex-box-image">
                            <h2 className="title">{this.state.data[0].program_name}</h2>
                        </div>
                        <div className="col-7">
                            <CardContainer categories={this.state.categories} resources={this.state.resources} program={this.state.params}/>
                        </div>
                    </div>
                ) : (<h3>Nothing here</h3>)}
            </div>
        )
    }
}
export default ProgramInfo; 