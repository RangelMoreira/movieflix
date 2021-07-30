import ButtonIcon from '../ButtonIcon';
import './styles.scss';
const Login = () =>{
  return(
    <div className="loginform">
      <h1 className="login-title">LOGIN</h1>
      <input type="email" placeholder="Email" className="input-login"/>
      <input type="password" placeholder="Senha" className="input-login pass"/>
      <ButtonIcon text={"LOGIN"}/>
    </div>
  )
}

export default Login;