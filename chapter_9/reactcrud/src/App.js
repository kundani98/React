
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import React, { Component } from 'react';
import User from './User'
import UserForm from './UserForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    console.log(firebase)
  }
  render() {

    return (
      <div >
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/edit/:id" element={<UserForm/>} /> 
              <Route exact path="/" element={<User/>} />
              <Route path="/add" element={<UserForm/>} />
              <Route path="/*" element={<NotFound/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}



