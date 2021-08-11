import {Switch, Route, Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import PrivateRoute from './components/Routes/PrivateRoute';
import CatalogMovies from './pages/CatalogMovies';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import history from './core/utils/history'


const Routes = () =>(
 <Router history={history}>
   <Navbar/>
   <Switch>  
      
      <Route path="/" exact>
        <Home/>
      </Route>

      <PrivateRoute path="/movies/:movieId" >
        <MovieDetails/>
      </PrivateRoute>

      
      <PrivateRoute path="/movies"  >
        <CatalogMovies/>
      </PrivateRoute>

     
    </Switch>
 </Router>

);

export default Routes