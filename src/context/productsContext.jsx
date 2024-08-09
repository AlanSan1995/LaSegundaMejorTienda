import { createContext, useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async (category = null) => {
    const reference = collection(db, " products");

    const q = category
      ? query(reference, where("category", "==", category))
      : reference;

    const querySnapshot = await getDocs(q);
    const productsArray = [];
    querySnapshot.forEach((doc) => {
      productsArray.push({ id: doc.id, ...doc.data() });
    });
    setProducts(productsArray);
  };

  const getProductById = async (id) => {
    const docRef = doc(db, " products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id, ...docSnap.data() };
    } else {
      return null;
    }
  };
  return (
    <ProductsContext.Provider value={{ products, getProducts, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
