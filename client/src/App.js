import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetails from './components/ProductDetails'
import ProductsList from './components/ProductsList'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/products" component={ProductsList} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/" render={ () => <Redirect to="/products" /> } />
        </div>
      </Router>
    )
  }
}

export default App;
