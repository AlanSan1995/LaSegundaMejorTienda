import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";
import ProductDetailPopUp from "../ProductDetailPopUp/ProductDetailPopUp";

function ProductsList({ products }) {
  const [popUpSelected, setPopUpSelected] = useState(null);
  const openPopUp = (product) => {
    setPopUpSelected(product);
  };
  const closePopUp = () => {
    setPopUpSelected(null);
  };
  return (
    <div className='ProductsList'>
      {popUpSelected && (
        <ProductDetailPopUp product={popUpSelected} close={closePopUp} />
      )}
      {products.length == 0 ? (
        <div className='loadingspinner'>
          <div id='square1'></div>
          <div id='square2'></div>
          <div id='square3'></div>
          <div id='square4'></div>
          <div id='square5'></div>
        </div>
      ) : (
        products.map((prod) => (
          <ProductCard product={prod} key={prod.id} selectProduct={openPopUp} />
        ))
      )}
    </div>
  );
}

export default ProductsList;
