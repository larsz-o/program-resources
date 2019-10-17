import React, { Component } from 'react'; 

class CardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            chosenImage: ''
        }
    }
    componentDidMount(){
        this.selectImage();
    }
    selectImage = () => {
    let images = ['../images/adult-beard-business.jpg', '../images/adult-blur-businessman.jpg'];
    let index = Math.floor(Math.random() * images.length);
    let chosenImage = images[index];
    this.setState({
        ...this.state,
        chosenImage: chosenImage
    })
    
}
render(){
    return(
        <div className="flex-box-center">
        {this.props.categories.map((category, i) => {
            return(
                <div className="lead-card" key={i}><img src={category.icon} height="100px"/><h4>{category.display_name}</h4></div>
            );
        })}
    </div>
    );
}
}
export default CardContainer;