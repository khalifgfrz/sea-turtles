import { useEffect } from "react";

import MenuCard from "../components/MenuCard";
import Filter from "../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { productsThunk, setPagination } from "../redux/slices/product";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";

function Product() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, pagination } = useSelector((state: RootState) => state.product);
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get("page") || "1";

  useEffect(() => {
    dispatch(setPagination({ page: pageParam }));
  }, [pageParam, dispatch]);

  useEffect(() => {
    dispatch(productsThunk());
  }, [dispatch, pagination.page]);

  return (
    <main className="font-jakarta">
      <section className="hidden md:flex md:bg-[url('/src/assets/images/background-product.webp')] md:h-80 md:bg-no-repeat md:bg-cover md:bg-center">
        <h1 className="text-white my-auto pl-[10%] text-4xl lg:text-5xl max-w-xl lg:max-w-4xl">We Provide Good Coffee and Healthy Meals</h1>
      </section>

      <section className="mt-[20%] tbt:mt-[15%] md:mt-5 px-[5%] tbt:px-[10%]">
        <h1 className="text-2xl mt-5">
          Our <span className="text-span">Product</span>
        </h1>
        <div className="flex justify-center md:mt-8">
          <Filter />
          <div className="w-1/2 md:w-full">
            <div className="flex justify-center">
              {loading ? (
                <p className="text-center">Loading...</p>
              ) : error ? (
                <p className="text-center">{error}</p>
              ) : (
                <div className="md:grid md:grid-cols-2 justify-center">
                  <MenuCard products={products} />
                </div>
              )}
            </div>
            <Pagination />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
