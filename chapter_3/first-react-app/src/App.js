import React, { Component } from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';

class App extends Component {
    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    // render component view
    render() {
        const user = {
            firstName: 'Greg',
            lastName: 'Lim'
        };
        const isValid = false

        return (
            <div>
                <h1>Hello, {this.formatName(user)}</h1>
                <Products />
                <Button variant="primary" disabled={!isValid} >Click Me!!</Button>
                <Rating rating="1" />
                <Rating rating="2" />
                <Rating rating="3" />
                <Rating rating="4" />
                <Rating rating="5" />
            </div>
        );
    }
}
export default App;


