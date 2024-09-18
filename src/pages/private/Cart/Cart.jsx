import { useCartContext } from "../../../context/cartContext";
import "./Cart.css";
import CartProductsList from "./components/CartProductsList/CartProductsList";
import CartResume from "./components/CartResume/CartResume";

function Cart() {
  const { cart } = useCartContext();

  return (
    <div className='CartSection'>
      {!cart ? (
        <div className='loaderSpinner'>
          <div className='spinner'></div>
        </div>
      ) : (
        <>
          <CartProductsList />
          <CartResume />
        </>
      )}
    </div>
  );
}

export default Cart;
