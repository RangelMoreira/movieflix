import { useState } from 'react';
import './styles.scss';

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <nav className="bg-primary main-nav">
      <h1 className="nav-logo">MovieFlix</h1>

      {isLogged && (
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