import { Link } from "react-router-dom";
import "./RegisterForm.css";

function RegisterForm({ handleSubmit }) {
  return (
    <div className='RegisterForm'>
      <h3>Sing In</h3>
      <p>Ingresa tus datos para registrarte</p>
      <form onSubmit={handleSubmit}>
        <div className='RegisterInputGroup'>
          <label>Email</label>
          <input type='text' name='email' />
        </div>
        <div className='RegisterInputGroup'>
          <label>Password</label>
          <input type='password' name='password' />
        </div>
        <button type='submit'>Enviar</button>
        <Link className='LogInLink' to='/login'>
          ¿Ya tenes una cuenta:?
        </Link>
      </form>
    </div>
  );
}

export default RegisterForm;
