import React, { Component } from 'react';
import Products from './Products';
import { Jumbotron, Button } from 'react-bootstrap';
import UserForm from './UserForm'
import GitHub from './GitHub';
class App extends Component {

    // render component view
    render() {


        return (
            <div>
                {/* <Products /> */}
                {/* <JumboTronComponent />
                <JumboTronComponent>
                    This is a long sentence, and I want to insert content into the
                    jumbotron component from the outside.
                </JumboTronComponent> */}
                {/* <UserForm/> */}
                <GitHub/>
            </div>
        );
    }
}
export default App;


