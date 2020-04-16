import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Index from '../Index/Index';
import About from '../About/About';
import Contact from '../Contact/Contact';

import './App.scss';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="bg">
          <div className="wrapper">
            <Navbar />
            
            <Route path="/zpi-frontend/" exact component={Index} />
            <Route path="/zpi-frontend/about" exact component={About} />
            <Route path="/zpi-frontend/contact" exact component={Contact} />

          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
