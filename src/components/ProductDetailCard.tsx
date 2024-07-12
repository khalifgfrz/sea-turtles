import axios from "axios";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { IProductBody } from "../types/product";

function ProductDetailCard() {
  const [getProduct, setProduct] = useState<IProductBody[]>([]);

  useEffect(() => {
    const getDataProduct = async () => {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product`;
      try {
        const result = await axios.get(url);
        setProduct(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataProduct();
  }, []);
  return (
    <div className="block md:grid md:grid-cols-4 justify-center">
      <MenuCard products={getProduct} />
    </div>
  );
}

export default ProductDetailCard;
