import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../firebase/firebase";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState(null);

  //agregar, elimniar, editar cantidad , borrar todo.

  const getCart = async (cartId) => {
    const docRef = doc(db, "carts", cartId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setCart({ id: cartId, ...docSnap.data() });
    } else {
      return null;
    }
  };

  const createCart = async (userId) => {
    const docRef = await addDoc(collection(db, "carts"), {
      products: [],
      userId,
      total: 0,
    });
    return docRef.id;
  };

  const addToCart = async (cartId, product) => {
    const cartRef = doc(db, "carts", cartId);
    await updateDoc(cartRef, {
      products: [...cart.products, product],
    });
    setCart({
      userId: cart.userId,
      total: 0,
      products: [...cart.products, product],
    });
  };

  return (
    <CartContext.Provider value={{ cart, createCart, addToCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
