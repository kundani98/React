import React, { Component } from 'react';

import { Jumbotron, Button } from 'react-bootstrap';
class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <p>{this.props.children}</p>
                <p><Button variant="primary">Learn more</Button></p>
            </div>
        );
    }
}
export default App;