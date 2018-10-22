import React, { Component } from 'react';
import swal from'sweetalert2';

class Password extends Component {
    emptyFieldHandler = (event) => {
        if (event.target.value === ''){
            swal('Field cannot be empty')
        }
    }
    render() {
        return (
            <div>
                <input type="password" placeholder="Password" id="password" required/>
            </div>
        );
    }
}

export default Password;