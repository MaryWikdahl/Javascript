
import './App.css';

import {BrowserRouter, Switch, Route}from 'react-router-dom'
import Products from './views/Products';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Signin from './views/Signin';


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Switch>
      <Route path="/Products" exact component={Products}/ >
      <Route path="/Signin" exact component={Signin}/ >
      <Route path="/" exact component={Home}/ >
      <Route path="/" exact component={NotFound}/ >
    </Switch>
    </BrowserRouter>
    </>
  
  );
}

export default App;
