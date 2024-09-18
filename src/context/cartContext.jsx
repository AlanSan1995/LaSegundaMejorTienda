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
    });
    return docRef.id;
  };

  const addToCart = async (cartId, product, quantity) => {
    const cartRef = doc(db, "carts", cartId);
    if (
      cart.products.some(
        (prod) =>
          prod.product.id == product.id &&
          prod.product.selectedSize == product.selectedSize &&
          prod.product.selectedColor == product.selectedColor
      )
    ) {
      const mapCart = cart.products.map((prod) => {
        if (
          prod.product.id == product.id &&
          prod.product.selectedSize == product.selectedSize &&
          prod.product.selectedColor == product.selectedColor
        ) {
          prod.quantity = prod.quantity + quantity;
        }
        return prod;
      });

      await updateDoc(cartRef, {
        products: mapCart,
      });

      return setCart({
        userId: cart.userId,
        products: mapCart,
      });
    }
    await updateDoc(cartRef, {
      products: [...cart.products, { product, quantity }],
    });
    setCart({
      userId: cart.userId,
      products: [...cart.products, { product, quantity }],
    });
  };
  const deleteProductFromCard = async (cartId, product) => {
    try {
      const cartRef = doc(db, "carts", cartId);

      const filteredCart = cart.products.filter((prod) => {
        console.log(
          prod.product.id != product.id &&
            prod.product.selectedSize != product.selectedSize &&
            prod.product.selectedColor != product.selectedColor
        );

        return (
          prod.product.id != product.id ||
          prod.product.selectedSize != product.selectedSize ||
          prod.product.selectedColor != product.selectedColor
        );
      });

      await updateDoc(cartRef, {
        products: filteredCart,
      });

      setCart({
        userId: cart.userId,
        products: filteredCart,
      });
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getTotal = () => {
    return cart.products.reduce(
      (acc, prod) => acc + prod.product.price * prod.quantity,
      0
    );
  };
  const changeQuantity = async (cartId, product, newQuantity) => {
    try {
      const cartRef = doc(db, "carts", cartId);

      const mapCart = cart.products.map((prod) => {
        if (
          prod.product.id == product.id &&
          prod.product.selectedSize == product.selectedSize &&
          prod.product.selectedColor == product.selectedColor
        ) {
          console.log("sada");
          prod.quantity = newQuantity;
        }
        return prod;
      });

      await updateDoc(cartRef, {
        products: mapCart,
      });

      setCart({
        userId: cart.userId,
        products: mapCart,
      });
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const deletAllProducts = async (cartId) => {
    try {
      const cartRef = doc(db, "carts", cartId);

      await updateDoc(cartRef, {
        products: [],
      });

      setCart({
        userId: cart.userId,
        products: [],
      });
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        createCart,
        addToCart,
        getCart,
        getTotal,
        changeQuantity,
        deleteProductFromCard,
        deletAllProducts,
      }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
