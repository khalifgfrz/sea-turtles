import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import productImg1 from "../assets/images/menu/1.webp";
import shoppingLogo from "../assets/images/shopping-cart.svg";
import thumbsIcon from "../assets/images/thumbs-icon.svg";
import { useStoreDispatch } from "../redux/hooks";
import { setTempProduct } from "../redux/slices/checkout";

export function DetailProducts() {
  return (
    <>
      <Header />
      <DetailProduct />
      <Footer />
    </>
  );
}

interface IProduct {
  uuid?: string;
  image?: string;
  product_name?: string;
  description?: string;
  price?: number;
}

interface IDetailProduct {
  uuid?: string | null;
  count?: number | null;
  size?: string | null;
  ice?: boolean | null;
  image?: string;
  product_name?: string;
  price?: string;
}
function DetailProduct() {
  const { uuid } = useParams<{ uuid: string }>();
  const [getProduct, setProduct] = useState<IProduct>();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const [form, setForm] = useState<IDetailProduct>({
    uuid: null,
    count: 0,
    size: null,
    ice: null,
    image: undefined,
  });

  useEffect(() => {
    const getDetailProduct = async () => {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product`;
      try {
        const result = await axios.get(`${url}/${uuid}`);
        setProduct(result.data.data[0]);
        setForm((prevForm) => ({
          ...prevForm,
          uuid: result.data.data[0].uuid,
          image: result.data.data[0].image,
          product_name: result.data.data[0].product_name,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    getDetailProduct();
  }, [uuid]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setForm((prevForm) => ({ ...prevForm, count: count + 1 }));
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    setForm((prevForm) => ({ ...prevForm, count: count - 1 }));
  };

  const handleSizeChange = (size: string) => {
    setForm((prevForm) => ({ ...prevForm, size }));
  };

  const handleIceChange = (ice: boolean) => {
    setForm((prevForm) => ({ ...prevForm, ice }));
  };

  function buyProduct() {
    dispatch(setTempProduct(form));
    navigate("/checkout");
  }

  function saveProduct() {
    dispatch(setTempProduct(form));
  }

  return (
    <main className="font-jakarta mt-[10%] uw:mt-[5%] lg:mt-[7%]">
      <section key={getProduct?.uuid} className="px-[5%] tbt:px-[10%]">
        <div className="block mt-10">
          <div className="inline-block tbt:flex tbt:justify-between tbt:mr-1">
            <div className="inline-block tbt:w-1/2 lg:w-1/3 tbt:mr-5">
              <div className="flex">{getProduct?.image ? <img className="w-full" src={getProduct?.image} alt={getProduct?.product_name} /> : <img className="w-full" src={productImg1} alt={getProduct?.product_name} />}</div>
              <div className="flex justify-center mt-2">
                <div className="flex mr-2">
                  {getProduct?.image ? (
                    <img className="uw:w-64 uw:h-60" width="150" height="150" src={getProduct?.image} alt={getProduct?.product_name} />
                  ) : (
                    <img className="uw:w-64 uw:h-60" width="150" height="150" src={productImg1} alt={getProduct?.product_name} />
                  )}
                </div>
                <div className="flex mr-2">
                  {getProduct?.image ? (
                    <img className="uw:w-64 uw:h-60" width="150" height="150" src={getProduct?.image} alt={getProduct?.product_name} />
                  ) : (
                    <img className="uw:w-64 uw:h-60" width="150" height="150" src={productImg1} alt={getProduct?.product_name} />
                  )}
                </div>
                <div className="flex">
                  {getProduct?.image ? (
                    <img className="uw:w-64 uw:h-60" width="150" height="150" src={getProduct?.image} alt={getProduct?.product_name} />
                  ) : (
                    <img className="uw:w-64 uw:h-60" width="150" height="150" src={productImg1} alt={getProduct?.product_name} />
                  )}
                </div>
              </div>
            </div>
            <div className="tbt:w-1/2 lg:w-2/3 xl:w-3/4 mt-4 tbt:mt-0">
              <p className="font-bold mb-1 md:text-lg uw:text-4xl">{getProduct?.product_name}</p>
              <div className="flex items-center">
                <p className="text-primary md:text-xl uw:text-4xl">IDR {getProduct?.price}</p>
              </div>
              <div className="flex text-primary items-center mt-1">
                <div className="mr-2 uw:text-4xl" data-value="1">
                  &#9733;
                </div>
                <div className="mr-2 uw:text-4xl" data-value="2">
                  &#9733;
                </div>
                <div className="mr-2 uw:text-4xl" data-value="3">
                  &#9733;
                </div>
                <div className="mr-2 uw:text-4xl" data-value="4">
                  &#9733;
                </div>
                <div className="mr-2 uw:text-4xl" data-value="5">
                  &#9733;
                </div>
                <div className="text-lightgray text-sm uw:text-2xl">5.0</div>
              </div>
              <div className="flex text-lightgray items-center my-1">
                <p className="text-xs lg:text-sm uw:text-2xl mr-2">200+ Review | Recommendation</p>
                <img className="uw:w-10 uw:h-10" width="20" height="20" src={thumbsIcon} alt="thumbs-icon" />
              </div>
              <p className="text-xs lg:text-sm uw:text-2xl text-lightgray mb-1">{getProduct?.description}</p>
              <div className="grid grid-cols-3 border border-darkgray2 rounded max-w-24 uw:max-w-32 mt-2">
                <button onClick={handleDecrement} className="uw:text-xl border border-primary mr-2 rounded w-8 text-lightblack2 font-bold text-lg hover:bg-primary active:bg-darkprimary">
                  -
                </button>
                <div className="flex justify-center items-center font-bold uw:text-xl">
                  <p>{count}</p>
                </div>
                <button onClick={handleIncrement} className="uw:text-xl uw:ml-2 border rounded border-primary w-8 text-lightblack2 font-bold text-lg hover:bg-primary active:bg-darkprimary">
                  +
                </button>
              </div>
              <p className="mt-3 font-bold text-sm uw:text-xl">Choose Size</p>
              <div className="flex justify-between mt-3">
                <button
                  className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleSizeChange("Regular")}
                >
                  Regular
                </button>
                <button
                  className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleSizeChange("Medium")}
                >
                  Medium
                </button>
                <button
                  className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleSizeChange("Large")}
                >
                  Large
                </button>
              </div>
              <p className="mt-3 font-bold text-sm uw:text-xl">Hot/Ice?</p>
              <div className="flex justify-between mt-3">
                <button
                  className="w-1/2 mr-4 uw:mr-32 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleIceChange(true)}
                >
                  Ice
                </button>
                <button
                  className="w-1/2 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black"
                  onClick={() => handleIceChange(false)}
                >
                  Hot
                </button>
              </div>
              <div className="block tbt:flex mt-3 md:mt-8 uw:mt-10">
                <button
                  className="w-full tbt:w-1/2 h-8 uw:h-12 tbt:mr-5 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs md:text-sm lg:text-base uw:text-xl"
                  onClick={() => {
                    buyProduct();
                  }}
                >
                  Buy
                </button>
                <button
                  className="mt-3 tbt:mt-0 w-full tbt:w-1/2 h-8 uw:h-12 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs md:text-sm lg:text-base uw:text-xl"
                  onClick={() => {
                    saveProduct();
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
            <p className="mt-4 text-center font-semibold text-lg tbt:text-xl uw:text-4xl text-lightblack2">
              Recommendation <span className="text-span">For You</span>
            </p>
            <div>
              <MenuCard products={[]} />
            </div>
          </div>
          <div className="hidden md:flex justify-center mt-5">
            <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">1</button>
            <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">2</button>
            <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">3</button>
            <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">4</button>
            <button className="text-secondary bg-darkgray2 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">&#9656;</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DetailProduct;
