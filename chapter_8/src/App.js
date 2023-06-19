import React, { Component } from 'react';
import Products from './Products';
import { Jumbotron, Button } from 'react-bootstrap';
import UserForm from './UserForm'
import GitHub from './GitHub';
import GitHubUser from './GitHubUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
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
                {/* <GitHub /> */}
                <Header />
            </div>
        );
    }
}
export default App;

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Kundani98</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/github">GitHub</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Routes>
                        <Route path="/github/user/:login/:id" component={GitHubUser} /> 
                        <Route path="/github" element={<GitHub />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}
class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

class NotFound extends Component {
    render() {
        return <div>Not Found</div>
    }
}

