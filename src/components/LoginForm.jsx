/* eslint-disable */

import { useState } from 'react';
import axios from 'axios';
import SignUp from './NewUser';
import RegisterUser from './RegistrationForm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../LoginForm.css' ;
import { Container } from 'react-bootstrap';

const projectID = '8ee613c9-0f92-4908-b424-fd5ca1fa7a6c';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };


  return (
    <Router>
     <Switch>
       <Route exact path="/">
    <section className="vh-100">
  <Container className="h-custom" fluid={true}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
          alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <h1 className="title" style={{color: "black", textAlign: "left"}}>Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a valid username" required/>
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

          {/* Password input */}
          <div className="form-outline mb-3">
            <input type="password" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password" required/>
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <h5 align="center">{error}</h5>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Start Chatting</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/newUser"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </Container>
  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* Copyright */}
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    {/* Copyright */}

    {/* Right */}
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    {/* Right */}
  </div>
</section>
</Route>
  <Route path="/newUser">
    <RegisterUser />
  </Route>
  </Switch>
  </Router>
  );
};

export default Modal;

{/*
 <Router>
     <Switch>
       <Route exact path="/">
   <div className="wrapper">
     <div className="form">
       <h1 className="title">Chat Application</h1>
       <form onSubmit={handleSubmit}>
         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  className="input" placeholder="Username" required />
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
         <div align="center">
           <button type="submit" className="button">
             <span>Start chatting</span>
           </button
         </div>
        
       </form>
       <h5 align="center">{error}</h5>
       <div align="center" className="no-account">
         <p>Don't have an account? <a href="/newUser" className="no-account-link">Create New User</a></p>
       </div>
     </div>
   </div>
   </Route>
   <Route path="/newUser">
     <SignUp />
   </Route>
     </Switch>
 </Router>

*/}