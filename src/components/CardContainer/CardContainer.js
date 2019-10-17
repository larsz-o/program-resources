import React, { Component } from 'react';
import axios from 'axios';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            category: ''
        }
    }

    selectCategory = (category_id) => {
        let categoryName = this.props.categories.filter(function(category){
            if(category.id === category_id){
                return category;
            }
        })
        console.log(categoryName);
        this.setState({
            ...this.state,
            selected: category_id,
            category: categoryName[0].display_name
        });
        
    }
    render() {
        return (
            <div>{this.state.selected === ''? ( <div className="flex-box-center">{this.props.categories.map((category, i) => {
                return (
                    <div onClick={() => this.selectCategory(category.id)} className="lead-card" key={i}><img src={category.icon} height="100px" alt={category.category_name}/><h4>{category.display_name}</h4></div>
                );
            }
            )}
            </div>):(<div>
                <div className="center"><h2>{this.state.category}</h2></div>
                <div className="flex-box-center">
                    {this.props.resources.map((resource, i) => {
                        return(<div className="lead-card" key={i}>{resource.name}</div>);
                    })}
                    </div>
                </div>)}

            </div>
        )
    }
}
export default CardContainer;