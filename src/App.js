// import React, { Fragment } from 'react'
import Header from './components/header'
import SideNav from './components/side-nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Layout from './pages/layout'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Router>
        <SideNav></SideNav>
        <div className="content">
          <Route path="/">
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/layout">
              <Layout></Layout>
            </Route>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
