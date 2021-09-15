import React from 'react';
//pages
import './App.css'
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

//routing
import {Route,Switch} from 'react-router-dom'

//components
import Navbar from './components/Navbar'



function App() {
  return (
    <>
    <Navbar/>
    <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/rooms/" component={Rooms}/>
       <Route exact path="/rooms/:slug" component={SingleRoom}/>
       <Route component={Error}/>
    </Switch>


    </>
  );
}

export default App;
