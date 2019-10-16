import React, { Component } from 'react';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


class ContributeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [],
            categories: [],
            program_select: 'n/a',
            category_select: 'n/a'
        }
    }
    componentDidMount() {
        this.getPrograms();
        this.getCategories();
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
    getPrograms = () => {
        axios({
            method: 'GET',
            url: 'api/program/names'
        }).then((response) => {
            this.setState({
                ...this.state,
                programs: response.data
            })
        }).catch((error) => {
            console.log('Error getting program names', error);
        })
    }
    handleChangeFor = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="flex-box">
                    <div className="col-10 col-s-12">
                        <h3>Add a new resource</h3>
                    <div className="flex-box">
                    <div>
                            <FormControl>
                                <label>Program</label>
                                <Select value={this.state.program_select} onChange={(event) => this.handleChangeFor(event, 'program_select')}>
                                    <MenuItem value="n/a">---choose one--</MenuItem>
                                    {this.state.programs.map((program, i) => {
                                        return (
                                            <MenuItem value={program.program_name} key={i}>{program.program_name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl>
                                <label>Resource Category</label>
                                <Select value={this.state.category_select} onChange={(event) => this.handleChangeFor(event, 'category_select')}>
                                    <MenuItem value="n/a">---choose one--</MenuItem>
                                    {this.state.categories.map((category, i) => {
                                        return (
                                            <MenuItem value={category.category_name} key={i}>{category.display_name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </div>

                    </div>
                        
                    </div>

                </div>


            </div>
        );
    }
}
export default ContributeData; 