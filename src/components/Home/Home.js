import React, { Component } from 'react';
import swal from 'sweetalert2';

class Home extends Component {
    textColor = {
        color: "blue",
        textAlign: 'center',
        fontSize: "bold"
    }

    render() {
        return (
            <div>
                <h1 style={this.textColor}>Welcome!! </h1>
                { swal(
                'Logged in Successfully!',
                'You have been logged in to this Rect App',
                'success'
            )}
            </div>
        );
    }
}

export default Home;