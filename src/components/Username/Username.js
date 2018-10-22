import React, { Component } from 'react';
import swal from 'sweetalert2';
class Username extends Component {
    emptyFieldHandler = (event) => {
        if (event.target.value === ''){
            swal('Field cannot be empty')
        }
    }
    render() {
        return (
            <div>
               <input type="text" onSubmit={this.emptyFieldHandler} placeholder="Username" id="username" required/>
            </div>
        );
    }
}

export default Username;