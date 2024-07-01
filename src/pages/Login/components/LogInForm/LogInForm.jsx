import "./LogInForm.css";
import Books from "../../../../assets/img/Books.png";
import Clothes from "../../../../assets/img/Clothes.png";
import Fruit from "../../../../assets/img/Fruit.png";
import { Link } from "react-router-dom";

function LogInForm({ handleSubmit }) {
  return (
    <div className='LogInForm'>
      <img src={Books} alt='' className='LogInIcons1' />
      <img src={Clothes} alt='' className='LogInIcons2' />
      <img src={Fruit} alt='' className='LogInIcons3' />
      <h3>Log In</h3>
      <p>Ingresa tus datos para iniciar sesion</p>
      <form onSubmit={handleSubmit}>
        <div className='LogInInputGroup'>
          <label>Email</label>
          <input type='text' name='email' />
        </div>
        <div className='LogInInputGroup'>
          <label>Password</label>
          <input type='password' name='password' />
        </div>
        <button type='submit'>Enviar</button>
        <Link className='registerLink' to='/register'>
          ¿Estas registrado:?
        </Link>
      </form>
    </div>
  );
}

export default LogInForm;
