// import React, { useState, useEffect } from 'react'
import Header from './components/header'
import SideNav from './components/side-nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@pages/home'
import Layout from '@pages/layout'
import InputSDL from '@pages/inputsdl'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Router>
        <SideNav></SideNav>
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/layout">
              <Layout></Layout>
            </Route>
            <Route path="/inputsdl">
              <InputSDL></InputSDL>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
