import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <div className='ProductsList'>
      {products.length == 0 ? (
        <div className='loadingspinner'>
          <div id='square1'></div>
          <div id='square2'></div>
          <div id='square3'></div>
          <div id='square4'></div>
          <div id='square5'></div>
        </div>
      ) : (
        products.map((prod) => <ProductCard product={prod} />)
      )}
    </div>
  );
}

export default ProductsList;
