
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ButtonIcon from '../../../../components/ButtonIcon';
import { saveSessionData } from '../../../../core/utils/auth';
import { makeLogin } from '../../../../core/utils/request';
import './styles.scss';

type FormState = {
  username: string;
  password: string;
}


const Login = () => {
  const { register, handleSubmit, errors } = useForm<FormState>();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();

  const onSubmit = (data: FormState) => {
   
    makeLogin(data)
      .then(response => {
        setHasError(false);
        saveSessionData(response.data);
        history.push('/movies');
        //.replace(from);
      })
      .catch(() => {
        setHasError(true);
      })
  }

  return (

    <div className="loginform">
      {hasError && (
        <div className="alert alert-danger">
          Usuário ou senha inválidos
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="login-title">LOGIN</h1>
        <input
          type="email"
          placeholder="Email"
          className="input-login"
          name="username"
          ref={register({
            required: "Campo obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido"
            }
          })}

        />
        {errors.username && (
          <div className="invalid-feedback d-block">
            {errors.username.message}
          </div>
        )}
        <input
          type="password"
          placeholder="Senha"
          className="input-login pass"
          name="password"
          ref={register({ required: "Campo obrigatório", minLength: 5 })}
        />
        {errors.password && (
          <div className="invalid-feedback d-block">
            {errors.password.message}
          </div>
        )}
        <div className="button-icon">
          <ButtonIcon text={"LOGIN"} />
        </div>
      </form>
    </div>

  )
}

export default Login;
