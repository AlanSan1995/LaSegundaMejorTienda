import "./Carrucel.css";
import imagen1 from "../../aseets/img/img1carrucel.jpg";
import imagen2 from "../../aseets/img/img2carrucel.jpg";
import imagen3 from "../../aseets/img/img3carrucel.jpg";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Carrucel() {
  const [carrucelPosition, setCarrucelPosition] = useState(0);
  const prev = () => {
    setCarrucelPosition(carrucelPosition == 0 ? 2 : carrucelPosition - 1);
  };
  const next = () => {
    setCarrucelPosition(carrucelPosition == 2 ? 0 : carrucelPosition + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [carrucelPosition]);

  return (
    <div className='Carrucel'>
      <div
        className='carrucelSlider'
        style={{ transform: `translateX(-${carrucelPosition * 100}%)` }}>
        <div className='CarrucelContainer'>
          <div
            className='slider1'
            style={{ backgroundImage: `url(${imagen1})` }}>
            <h3>
              <span>Ofertas!</span> <br />
              ropa gris
            </h3>
          </div>
          <div
            className='slider2'
            style={{ backgroundImage: `url(${imagen2})` }}>
            <h3>
              <span>Verdura</span> <br />
              de la mejor
            </h3>
          </div>
          <div
            className='slider3'
            style={{ backgroundImage: `url(${imagen3})` }}>
            <h3>
              <span>Cultura</span> <br />
              de la lectura
            </h3>
          </div>
        </div>
      </div>

      <div className='CarrucelControl'>
        <button onClick={prev}>
          <ArrowBackIosIcon />
        </button>
        <button onClick={next}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}

export default Carrucel;
