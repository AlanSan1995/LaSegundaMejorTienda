import { Link } from "react-router-dom";
import { useCartContext } from "../../../../../context/cartContext";
import "./CartResume.css";

function CartResume() {
  const { cart, getTotal } = useCartContext();
  return (
    <div className='CartResume'>
      {cart.products.length == 0 ? (
        <>
          <div className='ShopOffResumeTitle'>
            <h4>Resumen de compra</h4>
          </div>
          <span></span>
          <div className='ShopOffResumeContent'>
            <p>
              Aquí verás los importes de tu compra una vez que agregues
              productos.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className='ShopOnResumeTitle'>
            <h4>Resumen de compra</h4>
          </div>
          <span></span>
          <div className='ShopOnResumeContent'>
            <div className='ShopOnResumeContentProductsPrice'>
              <p>
                Products (
                {cart.products.reduce((acc, prod) => acc + prod.quantity, 0)})
              </p>
              <span>$ {getTotal()}</span>
            </div>
            <div className='ShopOnResumeContentTotal'>
              <p>Total</p>
              <span>$ {getTotal()}</span>
            </div>

            <Link className='bottone5'>Continuar Compra</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartResume;
