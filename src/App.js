import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login.jsx';
import ClientCreate from './components/client/client-create';
import ClientList from './components/client/client-list';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <section className="contact submit-file">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-7 wow fadeInUp">
              <Switch>
                  <Route path="/" exact component={Login}/>
                  <Route path="/client-add" exact component={ClientCreate}/>
                  <Route path="/client-list" exact component={ClientList}/>
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
