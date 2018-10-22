import React, { Component } from 'react';

class Button extends Component {
    onSubmitHandler = (event) => {
        // node will do this
    }
    
    render() {
        return (
            <div>
                < button type="submit" onClick={this.props.click}> {this.props.children} </button>
            </div>
        );
    }
}

export default Button;