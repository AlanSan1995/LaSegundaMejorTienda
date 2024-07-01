import "./Register.css";
import BackgroundSignIn from "../../assets/img/BackgroundSignIn.jpg";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { useAuthContext } from "../../context/authContext";
import { useState } from "react";

function Register() {
  const { registerUser } = useAuthContext();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Extrae la informacion del formulario
    const formData = new FormData(e.target);
    //Lo transforma a un Objeto normal
    const user = Object.fromEntries(formData);

    const error = await registerUser(user.email, user.password);
    console.log(error);
    if (error) {
      setError(error);
    }
  };

  return (
    <div className='Register'>
      <RegisterForm handleSubmit={handleSubmit} />
      <div
        style={{ backgroundImage: `url(${BackgroundSignIn})` }}
        className='RegisterBackground'></div>
    </div>
  );
}

export default Register;
