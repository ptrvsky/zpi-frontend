import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Index from '../Index/Index';

import './App.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="bg">
          <div className="wrapper">
            <Navbar />
            <Route path="/" exact component={Index} />
          
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
