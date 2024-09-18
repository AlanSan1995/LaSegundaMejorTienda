import { useState } from "react";
import { useAuthContext } from "../../../../../context/authContext";
import { useCartContext } from "../../../../../context/cartContext";
import "./CartProductCard.css";
import { Link } from "react-router-dom";

function CartProductCard({ prod, selectProduct }) {
  const [loading, setLoading] = useState(false);
  const { changeQuantity, deleteProductFromCard } = useCartContext();
  const { user } = useAuthContext();
  const lessQuantity = async () => {
    if (prod.quantity > 1) {
      setLoading(true);
      const response = await changeQuantity(
        user.cartId,
        prod.product,
        prod.quantity - 1
      );
      response && setLoading(false);
    }
  };
  const moreQuantity = async () => {
    setLoading(true);
    const response = await changeQuantity(
      user.cartId,
      prod.product,
      prod.quantity + 1
    );
    response && setLoading(false);
  };
  return (
    //{product:{},quantity:cant}
    <div className='CardSeparatorSection'>
      <span className='CardSeparator'></span>
      <div className='CardSeparatorInfo'>
        <img src={prod.product.image} alt='' />
        <div className='CartProductInfo'>
          <h4>{prod.product.title}</h4>
          <p>
            Color: {prod.product.selectedColor}, Size:{" "}
            {prod.product.selectedSize}
          </p>
          <div className='CartProductButtons'>
            <button
              onClick={() => deleteProductFromCard(user.cartId, prod.product)}>
              Eliminar
            </button>
            <button onClick={() => selectProduct(prod)}>Modificar</button>
            <Link to={`/products/${prod.product.id}`}>Ver producto</Link>
          </div>
        </div>
        <div className='count'>
          {loading ? (
            <span className='loader'></span>
          ) : (
            <>
              <button onClick={lessQuantity}>-</button>
              <span>{prod.quantity}</span>
              <button onClick={moreQuantity}>+</button>
            </>
          )}
        </div>
        <div className='price'>${prod.product.price}</div>
      </div>
    </div>
  );
}

export default CartProductCard;
