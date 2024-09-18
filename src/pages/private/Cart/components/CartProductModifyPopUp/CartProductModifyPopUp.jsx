import "./CartProductModifyPopUp.css";
import CloseIcon from "@mui/icons-material/Close";
function CartProductModifyPopUp({ prod, close }) {
  return (
    <div className='CartProductModifyPopUp'>
      <div className='CartProductModifyPopUpContent'>
        <button className='CartProductModifyPopUpButton' onClick={close}>
          <CloseIcon />
        </button>

        <div className='detailCardProduct'>
          <img src={prod.product.image} alt='' />
          <h4 className='detailCardProductTitle'>{prod.product.title}</h4>
          <p>$ {prod.product.price}</p>
        </div>
        <div>
          <h5>Elegí los detalles de este producto</h5>
        </div>
      </div>
    </div>
  );
}

export default CartProductModifyPopUp;
