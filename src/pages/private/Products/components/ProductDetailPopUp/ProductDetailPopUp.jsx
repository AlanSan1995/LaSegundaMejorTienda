import { useState } from "react";
import "./ProductDetailPopUp.css";
import CloseIcon from "@mui/icons-material/Close";
import { useAuthContext } from "../../../../../context/authContext";
import { Link } from "react-router-dom";

function ProductDetailPopUp({ product, close }) {
  const [selectedColor, setSelectedColor] = useState(product.color[0].value);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { user } = useAuthContext();
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div className='ProductDetailPopUp'>
      <div className='ProductDetailPopUpContent'>
        <div className='ProductDetailPopUpButton'>
          <button onClick={close}>
            <CloseIcon />
          </button>
        </div>
        <div className='ProductDetailPopUpinfo'>
          <img src={product.image} alt='' />
          <div className='ProductDetailPopUpDescription'>
            <h3>{product.title}</h3>
            <p className='ProductDetailPopUpDescriptionparagraf'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              doloribus beatae obcaecati optio quisquam, voluptates
            </p>
            <span>${product.price}</span>
            <p>Color:</p>
            <div className='radio-inputs'>
              {product.color.map((col, index) => (
                <label className='radio' key={index}>
                  <input
                    onChange={handleColorChange}
                    type='radio'
                    name='radio'
                    checked={selectedColor == col.value}
                    value={col.value}
                  />
                  <span
                    className='name'
                    style={{
                      background:
                        selectedColor == col.value ? col.value : "none",
                      fontWeight: 600,
                      color: selectedColor == col.value ? "#fff" : col.value,
                    }}>
                    {col.label}
                  </span>
                </label>
              ))}
            </div>
            <p>Size: {selectedSize}</p>
            <div className='radio-inputs'>
              {product.sizes.map((size, index) => (
                <label className='radio' key={index}>
                  <input
                    onChange={handleSizeChange}
                    type='radio'
                    name='radio'
                    checked={selectedSize == size}
                    value={size}
                  />
                  <span
                    className='name'
                    style={{
                      background: selectedSize == size ? "#fff" : "none",
                      fontWeight: 600,
                    }}>
                    {size}
                  </span>
                </label>
              ))}
            </div>
            {!user ? (
              <Link to='/login' className='aaa'>
                Add to Cart
              </Link>
            ) : (
              <button>Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPopUp;
