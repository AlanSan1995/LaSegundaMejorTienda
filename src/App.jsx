import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { useAuthContext } from "./context/authContext";
import Home from "./pages/private/Home/Home";
import Products from "./pages/private/Products/Products";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import Register from "./pages/Register/Register";

function App() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      {!user ? (
        <Routes>
          <Route path='/' element={<Navigate to='/login' replace />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
