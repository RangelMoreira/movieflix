  
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import CatalogMovies from './pages/CatalogMovies';
import Home from './pages/Home';


const Routes = () =>(
 <BrowserRouter>
   <Navbar/>
   <Switch>  
      
      <Route path="/" exact>
        <Home/>
      </Route>
      
      <Route path="/catalog" exact>
        <CatalogMovies/>
      </Route>

    </Switch>
 </BrowserRouter>

);

export default Routes