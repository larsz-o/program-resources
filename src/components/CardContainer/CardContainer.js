import React, { Component } from 'react';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            category: '',
            resources: this.props.resources
        }
    }
    resetCategory = () => {
        //make sure that when you reset the category, all data is sorted the typical way, by id in an ascending order
        let sorted = this.props.resources.sort(function(a,b){
            return a.id-b.id;
        })
        this.setState({
            selected: '',
            category: '', 
            resources: sorted
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
        // if the resource is program communication, we want to see the latest ones first, so let's sort them by id in a descending order and then set them to local state.
        let sorted = this.props.resources;
        if(category_id === 3){
            sorted = this.props.resources.sort(function(a,b){
                return b.id-a.id;
            })
        }
        this.setState({
            ...this.state,
            selected: category_id,
            category: categoryName[0].display_name,
            resources: sorted
        });

    }
    render() {
        return (
            <div className="full-height">{this.state.selected === '' ? (<div className="flex-box-center">{this.props.categories.map((category, i) => {
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
         
                <div className="flex-box-center flex-stretch">
                    {this.state.resources.map((resource, i) => {
                        if (resource.category_id === this.state.selected && this.state.selected !== 5) {
                            return (
                                <div className="lead-card col-6" key={i}>
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