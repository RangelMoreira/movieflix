import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import PrivateRoute from './components/Routes/PrivateRoute';
import CatalogMovies from './pages/CatalogMovies';
import Home from './pages/Home';


const Routes = () =>(
 <BrowserRouter>
   <Navbar/>
   <Switch>  
      
      <Route path="/" exact>
        <Home/>
      </Route>
      
      <PrivateRoute path="/catalog">
        <CatalogMovies/>
      </PrivateRoute>


    </Switch>
 </BrowserRouter>

);

export default Routes