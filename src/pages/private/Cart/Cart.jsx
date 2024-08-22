import { useEffect } from "react";
import { useCartContext } from "../../../context/cartContext";
import "./Cart.css";
import { useAuthContext } from "../../../context/authContext";

function Cart() {
  const { createCart, getCart, cart } = useCartContext();
  const { user, updateLoggedInUser } = useAuthContext();

  useEffect(() => {
    const verifyCartExist = async () => {
      let cartId = null;
      if (!user.cartId) {
        cartId = await createCart(user.id);

        await updateLoggedInUser({ cartId });
      }
      console.log(cartId);

      await getCart(cartId || user.cartId);
    };
    verifyCartExist();
  }, []);

  return (
    <div>
      <h1>entro</h1>
    </div>
  );
}

export default Cart;
