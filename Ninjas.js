import React, {Component} from 'react';

class Ninjas extends Component{

    render(){
        const {name,age,belt} = this.props;

        return(
            <div className="ninja">
                {/* <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <div>Belt: {this.props.belt}</div> */}

                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>
            </div>
                
            
        );
    }

}

export default Ninjas;
