import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Staff from './components/pages/Staff'

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className="container">
    <Route path='/' exact={true} component={Home}></Route>
    <Route path='/staff' exact={true} component={Staff}></Route>
    </div>
    </div>
    </Router>
  );
}

export default App;
