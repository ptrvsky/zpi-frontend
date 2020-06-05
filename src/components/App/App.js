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
import Order from '../Order/Order';

import './App.scss';

function App() {

  // Set up empty cart and empty order in local storage
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify({
      standars: [],
      customs: []
    }));
  }

  if (localStorage.getItem('order') === null) {
    localStorage.setItem('order', JSON.stringify({
      standards: [],
      customs: [],
      address: {},
      // payment: null
    }));
  }

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
            <Route path="/order" component={Order} />

          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
