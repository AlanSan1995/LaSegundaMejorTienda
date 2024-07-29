import { useEffect } from "react";
import { useProductsContext } from "../../../context/productsContext";
import "./Products.css";
import ProductsList from "./components/ProductsList/ProductsList";

function Products() {
  const { products, getProducts } = useProductsContext();

  useEffect(() => {
    getProducts();
  }, []);
  const productsExample = [
    {
      title: "Zapatos",
      img: "https://dinobutelli.com.ar/wp-content/uploads/2023/07/zapato-mujer-oficina-azafata-1.jpg",
      color: "Gris",
      description: " remera gris",
      price: 23,
      size: "m",
      title: "remera",
    },
    {
      title: "Zapatos",
      img: "https://dinobutelli.com.ar/wp-content/uploads/2023/07/zapato-mujer-oficina-azafata-1.jpg",
      color: "Gris",
      description: " remera gris",
      price: 23,
      size: "m",
      title: "remera",
    },
    {
      title: "Zapatos",
      img: "https://dinobutelli.com.ar/wp-content/uploads/2023/07/zapato-mujer-oficina-azafata-1.jpg",
      color: "Gris",
      description: " remera gris",
      price: 23,
      size: "m",
      title: "remera",
    },
    {
      title: "Zapatos",
      img: "https://dinobutelli.com.ar/wp-content/uploads/2023/07/zapato-mujer-oficina-azafata-1.jpg",
      color: "Gris",
      description: " remera gris",
      price: 23,
      size: "m",
      title: "remera",
    },
    {
      title: "Zapatos",
      img: "https://dinobutelli.com.ar/wp-content/uploads/2023/07/zapato-mujer-oficina-azafata-1.jpg",
      color: "Gris",
      description: " remera gris",
      price: 23,
      size: "m",
      title: "remera",
    },
    {
      title: "Zapatos",
      img: "https://dinobutelli.com.ar/wp-content/uploads/2023/07/zapato-mujer-oficina-azafata-1.jpg",
      color: "Gris",
      description: " remera gris",
      price: 23,
      size: "m",
      title: "remera",
    },
    {
      title: "Zapatos",
      img: "https://dinobutelli.com.ar/wp-content/uploads/2023/07/zapato-mujer-oficina-azafata-1.jpg",
      color: "Gris",
      description: " remera gris",
      price: 23,
      size: "m",
      title: "remera",
    },
  ];
  return (
    <div>
      <ProductsList products={productsExample} />
    </div>
  );
}

export default Products;
