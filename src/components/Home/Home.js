import React, { Component } from 'react';
import Button from '../Button/Button';

class Home extends Component {
    textColor = {
        color: "blue",
        textAlign: 'center',
        fontSize: "bold"
    }
    render() {
        return (
            <div>
                <h1 style={this.textColor}>Hello you have been logged in :) </h1>
                <Button onClick={this.returnPageHandler}> Logout </Button>
            </div>
        );
    }
}

export default Home;