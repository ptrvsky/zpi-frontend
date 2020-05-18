import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Index from '../Index/Index';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';

import './App.scss';

function App() {

  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="App">
        <div className="bg">
          <div className="wrapper">
            <Navbar />
            
            <Route path="/" exact component={Index} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />

          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
