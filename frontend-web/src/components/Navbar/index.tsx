import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from '../../core/utils/auth';
import './styles.scss';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(''); 
  const location = useLocation();

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    logout();
  }

  useEffect(() => {
    const currentUserData = getAccessTokenDecoded();
    setCurrentUser(currentUserData.user_name);
  }, [location])

  return (
    <nav className="bg-primary main-nav">
      <h1 className="nav-logo">MovieFlix</h1>

      {currentUser && (
        <a
          href="#logout"
          type="button"
          className="btn-logout"
          onClick={(event) => handleLogout(event)}
        >
          SAIR
        </a>
      )}
    </nav>

  );
}



export default Navbar;