import axios from 'axios';
import { useEffect, useState } from 'react'
import MenuCard from './MenuCard';

interface IProductBody {
    uuid: string;
    image: string;
    product_name: string;
    category: string;
    created_at: string;
    description: string;
    price: number;
  }

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
  });
  return (
    <div>
      <MenuCard products={getProduct} />
    </div>
  )
}

export default ProductDetailCard