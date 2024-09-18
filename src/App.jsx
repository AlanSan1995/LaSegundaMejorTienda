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
import { useCartContext } from "./context/cartContext";

function App() {
  const { user, getLoggedInUser, updateLoggedInUser } = useAuthContext();
  const { createCart, getCart } = useCartContext();

  const navigate = useNavigate();
  const verifyCartExist = async (userData) => {
    let cartId = null;
    if (!userData.cartId) {
      cartId = await createCart(userData.id);

      await updateLoggedInUser({ cartId });
    }

    await getCart(cartId || userData.cartId);
  };
  useEffect(() => {
    if (!user) {
      const userData = getLoggedInUser();
      if (userData) {
        verifyCartExist(userData);
        navigate("/");
      }
    }
  }, []);

  return (
    <div className='AppContainer'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:productId?' element={<Products />} />
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
    </div>
  );
}

export default App;
