import Navbar from "../../components/Navbar";
import { ReactComponent as LoginDrawn } from '../../core/assets/images/login-drawn.svg';
import Login from "../Admin/components/Login";
import './styles.scss';
const Home = () => {
  return (
    <div className="main-content">
      <div className="home-description">

        <h1>Avalie Filmes</h1>
        <h2>Diga o que você achou do seu filme favorito</h2>
        <div className="image-login">
          <LoginDrawn className="image" />
        </div>
      </div>

      <div className="login">
        <Login />
      </div>
    </div>
  )
}

export default Home;