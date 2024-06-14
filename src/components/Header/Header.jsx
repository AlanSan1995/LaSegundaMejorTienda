import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";

function Header() {
  return (
    <header className='Header'>
      <Link to='/'>
        <img src={Logo} alt='' />
        <h1>La segunda mejor </h1>
      </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Productos</Link>
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
      </nav>
    </header>
  );
}

export default Header;
