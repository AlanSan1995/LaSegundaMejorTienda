import { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import "./Login.css";
import BackgroundSignIn from "../../assets/img/BackgroundSignIn.jpg";
import LogInForm from "./components/LogInForm/LogInForm";
import Alert from "../../components/Alert/Alert";
import { catchError } from "../../utils/catchError";
import GitHubIcon from "@mui/icons-material/GitHub";
import googleicon from "../../assets/icons/google.svg";
import { useNavigate } from "react-router-dom";

// modificar la navegacion a home cuando el usuario se logea 0 registra

function Login() {
  const { loginUser, googleAuth, githubAuth } = useAuthContext();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Extrae la informacion del formulario
    const formData = new FormData(e.target);
    //Lo transforma a un Objeto normal
    const user = Object.fromEntries(formData);

    const error = await loginUser(user.email, user.password);

    if (error) {
      return setError(error);
    }
    navigate("/");
  };
  const handleGoogleButton = async () => {
    const error = await googleAuth();

    if (error) {
      return setError(error);
    }
    navigate("/");
  };
  const handleGithubButton = async () => {
    const error = await githubAuth();

    if (error) {
      return setError(error);
    }
    navigate("/");
  };

  const closeAlert = () => {
    setError(null);
  };

  return (
    <div className='LogIn'>
      {error && (
        <Alert level='error' message={catchError(error)} onClose={closeAlert} />
      )}

      <div
        style={{ backgroundImage: `url(${BackgroundSignIn})` }}
        className='LogInBackground'>
        <button className='LoginButtonGoogle' onClick={handleGoogleButton}>
          <img src={googleicon} alt='' />
          Iniciar Sesion con Google
        </button>
        <button className='LoginButtonGitHub' onClick={handleGithubButton}>
          <GitHubIcon /> Iniciar Sesion con GitHub
        </button>
      </div>
      <LogInForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
