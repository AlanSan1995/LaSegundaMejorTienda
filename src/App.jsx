import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { useAuthContext } from "./context/authContext";
import Home from "./pages/private/Home/Home";
import Products from "./pages/private/Products/Products";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import Register from "./pages/Register/Register";
import Cart from "./pages/private/Cart/Cart";

function App() {
  const { user, getLoggedInUser } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      getLoggedInUser();
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        {!user ? (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </>
        ) : (
          <>
            <Route path='/cart' element={<Cart />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
