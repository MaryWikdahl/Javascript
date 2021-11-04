import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import Navbar from './components/Navbar';

function App() {
  return (
    
    
  <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/products" exact component={Products}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
