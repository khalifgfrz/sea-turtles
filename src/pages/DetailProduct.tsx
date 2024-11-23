import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import productImg1 from "../assets/images/menu/1.webp";
import shoppingLogo from "../assets/images/shopping-cart.svg";
import thumbsIcon from "../assets/images/thumbs-icon.svg";
import { useStoreDispatch } from "../redux/hooks";
import { setCheckouts } from "../redux/slices/checkout";
import ProductDetailCard from "../components/ProductDetailCard";
import { IDetailProduct, IProductBody } from "../types/product";
import Swal from "sweetalert2";

function DetailProduct() {
  const { uuid } = useParams<{ uuid: string }>();
  const [getProduct, setProduct] = useState<IProductBody>();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const [defaultProduct, setDefaultProduct] = useState<IDetailProduct>({
    count: 1,
    size: undefined,
    product_id: undefined,
    ice: false,
    image: undefined,
    price: 0,
  });

  useEffect(() => {
    const getDetailProduct = async () => {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product`;
      try {
        const result = await axios.get(`${url}/${uuid}`);
        setProduct(result.data.data[0]);
        setDefaultProduct((prevProduct) => ({
          ...prevProduct,
          product_id: result.data.data[0].id,
          image: result.data.data[0].image,
          product_name: result.data.data[0].product_name,
          price: result.data.data[0].price,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    getDetailProduct();
  }, [uuid]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setDefaultProduct((prevProduct) => ({ ...prevProduct, count: count + 1 }));
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    setDefaultProduct((prevProduct) => ({ ...prevProduct, count: count - 1 }));
  };

  const handleSizeChange = (size: number) => {
    setDefaultProduct((prevProduct) => ({ ...prevProduct, size }));
  };

  const handleIceChange = (ice: boolean) => {
    setDefaultProduct((prevProduct) => ({ ...prevProduct, ice }));
  };

  function checkoutProduct(isNavigate: boolean) {
    Swal.fire({
      title: "Berhasil!",
      text: "Produk Berhasil Disimpan!",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
      position: "top-end",
      customClass: {
        popup: "bg-blue-500 text-black text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
      },
      toast: true,
    });
    dispatch(setCheckouts(defaultProduct));
    if (isNavigate) {
      navigate("/checkout");
    }
  }

  return (
    <main className="font-jakarta mt-[10%] uw:mt-[5%] lg:mt-[7%]">
      <section key={getProduct?.uuid} className="px-[5%] tbt:px-[10%]">
        <div className="block mt-10">
          <div className="inline-block tbt:flex tbt:justify-between tbt:mr-1">
            <div className="inline-block tbt:w-1/2 lg:w-1/3 tbt:mr-5">
              <div className="flex">
                <img className="w-full" src={getProduct?.image || productImg1} alt={getProduct?.product_name} />
              </div>
              <div className="flex justify-center mt-2">
                <div className="flex mr-2">
                  <div className="flex">
                    <img className="w-full" src={getProduct?.image || productImg1} alt={getProduct?.product_name} />
                  </div>
                </div>
                <div className="flex mr-2">
                  <div className="flex">
                    <img className="w-full" src={getProduct?.image || productImg1} alt={getProduct?.product_name} />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex">
                    <img className="w-full" src={getProduct?.image || productImg1} alt={getProduct?.product_name} />
                  </div>
                </div>
              </div>
            </div>
            <div className="tbt:w-1/2 lg:w-2/3 xl:w-3/4 mt-4 tbt:mt-0">
              <p className="hidden">{getProduct?.id}</p>
              <p className="font-bold mb-1 md:text-lg">{getProduct?.product_name || "Product Name"}</p>
              <div className="flex items-center">
                <p className="text-primary md:text-xl">IDR {getProduct?.price || 0}</p>
              </div>
              <div className="flex text-primary items-center mt-1">
                <div className="mr-2" data-value="1">
                  &#9733;
                </div>
                <div className="mr-2" data-value="2">
                  &#9733;
                </div>
                <div className="mr-2" data-value="3">
                  &#9733;
                </div>
                <div className="mr-2" data-value="4">
                  &#9733;
                </div>
                <div className="mr-2" data-value="5">
                  &#9733;
                </div>
                <div className="text-lightgray text-sm">5.0</div>
              </div>
              <div className="flex text-lightgray items-center my-1">
                <p className="text-xs lg:text-sm mr-2">200+ Review | Recommendation</p>
                <img className="uw:w-10 uw:h-10" width="20" height="20" src={thumbsIcon} alt="thumbs-icon" />
              </div>
              <p className="text-xs lg:text-sm text-lightgray mb-1">{getProduct?.description || "description"}</p>
              <div className="grid grid-cols-3 border border-darkgray2 rounded max-w-24 uw:max-w-32 mt-2">
                <button onClick={handleDecrement} className=" border border-primary mr-2 rounded w-8 text-lightblack2 font-bold text-lg hover:bg-primary active:bg-darkprimary">
                  -
                </button>
                <div className="flex justify-center items-center font-bold ">
                  <p>{count}</p>
                </div>
                <button onClick={handleIncrement} className="uw:ml-2 border rounded border-primary w-8 text-lightblack2 font-bold text-lg hover:bg-primary active:bg-darkprimary">
                  +
                </button>
              </div>
              <p className="mt-3 font-bold text-sm ">Choose Size</p>
              <div className="flex justify-between mt-3">
                <button
                  className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base  active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleSizeChange(1)}
                >
                  Regular
                </button>
                <button
                  className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base  active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleSizeChange(2)}
                >
                  Medium
                </button>
                <button
                  className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base  active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleSizeChange(3)}
                >
                  Large
                </button>
              </div>
              <p className="mt-3 font-bold text-sm ">Hot/Ice?</p>
              <div className="flex justify-between mt-3">
                <button
                  className="w-1/2 mr-4 uw:mr-32 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-xs md:text-sm lg:text-base  active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleIceChange(true)}
                >
                  Ice
                </button>
                <button
                  className="w-1/2 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-xs md:text-sm lg:text-base  active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleIceChange(false)}
                >
                  Hot
                </button>
              </div>
              <div className="block tbt:flex mt-3 md:mt-8 uw:mt-10">
                <button
                  className="w-full tbt:w-1/2 h-8 uw:h-12 tbt:mr-5 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs md:text-sm lg:text-base "
                  onClick={() => {
                    checkoutProduct(true);
                  }}
                >
                  Buy
                </button>
                <button
                  className="mt-3 tbt:mt-0 w-full tbt:w-1/2 h-8 uw:h-12 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs md:text-sm lg:text-base "
                  onClick={() => {
                    checkoutProduct(false);
                  }}
                >
                  <div className="flex items-center justify-center">
                    <img className="mr-2 uw:w-8 uw:h-8" width="20" height="20" src={shoppingLogo} alt="shopping-cart" />
                    <p>Add To Cart</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="block">
            <p className="mt-4 text-center font-semibold text-lg tbt:text-xl text-lightblack2">
              Recommendation <span className="text-span">For You</span>
            </p>
            <div className="flex justify-center">
              <ProductDetailCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DetailProduct;
