import { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import "./Login.css";
import BackgroundSignIn from "../../assets/img/BackgroundSignIn.jpg";
import LogInForm from "./components/LogInForm/LogInForm";
function Login() {
  const { loginUser } = useAuthContext();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Extrae la informacion del formulario
    const formData = new FormData(e.target);
    //Lo transforma a un Objeto normal
    const user = Object.fromEntries(formData);

    const error = await loginUser(user.email, user.password);
    console.log(error);
    if (error) {
      setError(error);
    }
  };

  return (
    <div className='LogIn'>
      <div
        style={{ backgroundImage: `url(${BackgroundSignIn})` }}
        className='LogInBackground'></div>
      <LogInForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
