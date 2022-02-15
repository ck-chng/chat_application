/* eslint-disable */

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewUser from './components/NewUser';
import { Container } from 'react-bootstrap';
import { LogoutOutlined } from '@ant-design/icons';


const projectID = '8ee613c9-0f92-4908-b424-fd5ca1fa7a6c';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Container className="chats-page" fluid={true}>
            <div className="nav-bar">
              <div className="logo-tab">
                <h3 className="logo" style={{color: "white"}}>Super Chat</h3>
              </div>
              <div className="logout-wrapper">
              <div className="logout-tab">
                <LogoutOutlined className="logout-button" onClick={handleClick}>Logout</LogoutOutlined>
              </div>
              </div>
            </div>
            <div className="chat-engine-wrapper">
            <ChatEngine
            className="chat-engine"
            height= "95vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
            </div>
          </Container>
        </Route>
        <Route path="/newUser">
          <NewUser />
        </Route>
      </Switch>
    </Router>

  );
};

// infinite scroll, logout, more customizations...

export default App;
