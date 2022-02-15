/* eslint-disable */
import { useState } from 'react';
import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

const projectID = '8ee613c9-0f92-4908-b424-fd5ca1fa7a6c';

const RegisterUser = () => {
        const [firstname, setFirstname] = useState('');
        const [lastname, setLastname] = useState('');
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        let history = useHistory();

        const handleSubmit = async (e) => {
            e.preventDefault();

            var axios = require('axios');
            var data = {
	            "username": username,
	            "secret": password,
	            "first_name": firstname,
	            "last_name": lastname
            };

            var config = {
	            method: 'post',
	            url: 'https://api.chatengine.io/users/',
	            headers: {
		            'PRIVATE-KEY': '{{fcb42cdb-66cb-47ec-b4fb-8595ab6f43ea}}'
	            },
	            data : data
            };

            axios(config)
            .then(function (response) {
	            console.log(JSON.stringify(response.data));
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                history.push('/');
                window.location.reload();
            })
            .catch(function (error) {
	            console.log(error);
            });

            
        }

    return (
        <Router>
            <Switch>
                <Route exact path="/newUser">
        <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" onChange={e => setFirstname(e.target.value)} required/>
                      <label className="form-label" for="form3Example1c">Your First Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" onChange={e => setLastname(e.target.value)} required/>
                      <label className="form-label" for="form3Example1c">Your Last Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" onChange={e => setUsername(e.target.value)} required/>
                      <label className="form-label" for="form3Example1c">Your Username</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" onChange={e => setPassword(e.target.value)} minLength="6" required/>
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" style={{float: "right"}}>
                    <button type="submit" className="btn btn-primary btn-lg" >Register</button>
                  </div>

                  <p className="forgot-password" style={{marginTop: "80px"}}>
                    Already registered <a href="/">Log in?</a>
                  </p>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</Route>
<Route exact path="/" >
        <ChatEngine
            className="chat-engine"
            height= "100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
</Route>
</Switch>
</Router>
    );
}

export default RegisterUser;