import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login.jsx';
import ClientCreate from './components/client/client-create';
import ClientList from './components/client/client-list';
import { Switch, Route } from 'react-router-dom';
import "../public/css/animate.min.css";
import "../public/css/odometer.min.css";
import "../public/css/fancybox.min.css";
import "../public/css/swiper.min.css";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/js/bootstrap.min.js";
import "../public/js/imagesloaded.pkgd.min.js";
import "../public/js/isotope.min.js";
import "../public/js/jquery.min.js";
 import "../public/js/swiper.min.js";
 import "../public/js/TweenMax.min.js";
 import "../public/js/odometer.min.js";
 import "../public/js/fancybox.min.js";
 import "../public/js/wow.min.js";
 import "../public/js/scripts.js";

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
