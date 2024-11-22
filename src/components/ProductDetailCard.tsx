import { useEffect } from "react";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { productsThunk } from "../redux/slices/product";

function ProductDetailCard() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(productsThunk());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center">{error}</p>
      ) : (
        <div className="block w-1/2 md:w-full md:grid md:grid-cols-4 justify-center place-items-center">
          <MenuCard products={products} />
        </div>
      )}
    </div>
  );
}

export default ProductDetailCard;
