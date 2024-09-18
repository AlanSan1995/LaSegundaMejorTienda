import { Link } from "react-router-dom";
import "./CartProductsList.css";
import { useCartContext } from "../../../../../context/cartContext";
import CartProductCard from "../CartProductCard/CartProductCard";
import { useAuthContext } from "../../../../../context/authContext";
import { useState } from "react";
import CartProductModifyPopUp from "../CartProductModifyPopUp/CartProductModifyPopUp";

function CartProductsList() {
  const { cart, deletAllProducts } = useCartContext();
  const { user } = useAuthContext();
  const [modifyPopUpSelected, setModifyPopUpSelected] = useState(null);

  const openPopUp = (product) => {
    setModifyPopUpSelected(product);
  };
  const closePopUp = () => {
    setModifyPopUpSelected(null);
  };
  return (
    <div
      className={
        cart.products.length == 0 ? "CartProductsList" : "CartProductsListShow"
      }>
      {modifyPopUpSelected && (
        <CartProductModifyPopUp prod={modifyPopUpSelected} close={closePopUp} />
      )}
      {cart.products.length == 0 ? (
        <div className='ShopOff'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/lasegundamejor-73a78.appspot.com/o/ShopOff.png?alt=media&token=58fe03d0-7f35-4514-8c0f-0c11b8fe0264'
            alt=''
          />
          <h4>¡Empezá un carrito de compras!</h4>
          <p>Sumá productos y conseguí envío gratis.</p>
          <Link to='/products'>Descubrir productos</Link>
        </div>
      ) : (
        <>
          <div className='CartProductsListTitle'>
            <h3>Carrito de compras</h3>
            <button onClick={() => deletAllProducts(user.cartId)}>
              Eliminar Todo
            </button>
          </div>

          {cart.products.map((prod, index) => (
            <CartProductCard
              key={prod.product.id + index}
              prod={prod}
              selectProduct={openPopUp}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default CartProductsList;
