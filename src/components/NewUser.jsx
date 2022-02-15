/* eslint-disable */
import { useState } from 'react';
import React, { Component } from "react";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import App from '../App';
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";


const projectID = '8ee613c9-0f92-4908-b424-fd5ca1fa7a6c';

const SignUp = () => {
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
                <Route path='/newUser'>
                <Container className="new-user-wrapper" fluid={true}>
                <Container className="form-wrapper" fluid={true}>
                <Container className="form" fluid={true}>
   

                <h3>Register</h3>
                <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" value={firstname} onChange={e => setFirstname(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" value={lastname} onChange={e => setLastname(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" minlength="6" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                
                </form>   

                <p className="forgot-password">
                    Already registered <a href="/">Log in?</a>
                </p>
                
                </Container>
                </Container>
                </Container>

                </Route>
                <Route exact path="/">
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

export default SignUp;

