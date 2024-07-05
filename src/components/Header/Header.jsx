import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import { useAuthContext } from "../../context/authContext";

function Header() {
  const { user } = useAuthContext();
  return (
    <header className='Header'>
      <Link to='/'>
        <img src={Logo} alt='' />
        <h1>La segunda mejor </h1>
      </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Productos</Link>
        {!user && (
          <div className='HeaderAuthButtons'>
            <Link to='/login'>Iniciar Sesion</Link>
            <Link to='/register'>Registrarse</Link>
          </div>
        )}
        {user && (
          <>
            <Link>Agregar productos</Link>
            <Link>
              <FavoriteIcon />
            </Link>
            <Link>
              <PersonIcon />
            </Link>
            <Link>
              <ShoppingCartIcon />
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
