import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getSessionData } from '../../core/utils/auth';
import './styles.scss';

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const history = useHistory();

  const logout = () =>{
    localStorage.removeItem('authData');
    //history.replace('/');
  }

  return (
    <nav className="bg-primary main-nav">
      <h1 className="nav-logo">MovieFlix</h1>

      {isLogged  && (
        <button
          type="button"
          className="btn-logout"
        >
          SAIR
        </button>
      )}
    </nav>

  );
}



export default Navbar;