import React, { Component } from 'react';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            category: ''
        }
    }
    resetCategory = () => {
        this.setState({
            selected: '',
            category: ''
        })
    }
    selectCategory = (category_id) => {
        let categoryName = this.props.categories.filter(function (category) {
            if (category.id === category_id) {
                return category;
            } else {
                return false;
            }
        })
        this.setState({
            ...this.state,
            selected: category_id,
            category: categoryName[0].display_name
        });

    }
    render() {
        return (
            <div>{this.state.selected === '' ? (<div className="flex-box-center">{this.props.categories.map((category, i) => {
                return (
                    <div onClick={() => this.selectCategory(category.id)} className="lead-card" key={i}><img src={category.icon} height="100px" alt={category.category_name} /><h4>{category.display_name}</h4></div>
                );
            }
            )}
                <a href={`https://www.brandeis.edu/gps/student-courses/programs/listings/${this.props.program}.html`} target="_blank" rel="noopener noreferrer"><div className="lead-card"><img src="https://imagesgpscourses.s3.amazonaws.com/icons_program_resources/checklist+(2).svg" height="100px" alt="checklist icon" /><h4>Program Requirements</h4></div></a>
            </div>) : (<div>
                
                <div className="flex">
                    <img src="https://imagesgpscourses.s3.amazonaws.com/icons_program_resources/left-arrow.svg" height="50px" className="back-arrow" alt="back arrow" onClick={()=>this.resetCategory()}/>
                    <h2 className="category-title center">{this.state.category}</h2>
                </div>
         
                <div className="flex-box-center col-12">
                    {this.props.resources.map((resource, i) => {
                        if (resource.category_id === this.state.selected && this.state.selected !== 5) {
                            return (
                                <div className="lead-card col-12" key={i}>
                                   <div className="card-title"> <img src={resource.image_url} width="150px" alt={`icon for ${resource.name}`}/>
                                   <h3><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a></h3></div>
                                   <div className="align-left"><p>{resource.description}</p></div>
                                </div>
                                );} else if (resource.category_id === this.state.selected && this.state.selected === 5){
                                    return (
                                <div className="lead-card-faculty" key={i}>
                                   <div className="card-title"><img src={resource.image_url} className="faculty-img" alt={`icon for ${resource.name}`}/>
                                   <h3><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a></h3></div>
                                   <div className="align-left"><p>{resource.description}</p></div>
                                </div>
                                    )
                                }
                                else {
                                    return false;
                                }
                                })}
                </div>
            </div>)}

            </div>
        )
    }
}
export default CardContainer;