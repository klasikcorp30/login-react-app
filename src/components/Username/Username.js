import React, { Component } from 'react';

class Username extends Component {
    render() {
        return (
            <div>
               <input type="text" onSubmit={this.emptyFieldHandler} placeholder="Username" id="username" required/>
            </div>
        );
    }
}

export default Username;