import { useCallback, useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import promoImg1 from "../assets/images/promo/1.svg";
import promoImg2 from "../assets/images/promo/2.svg";
import MenuCard from "../components/MenuCard";

export function Products() {
  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
}

function Product() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const updateProgress = useCallback(() => {
    if (minPrice > maxPrice - 10) {
      setMinPrice(maxPrice - 10);
    }
    if (maxPrice < minPrice + 10) {
      setMaxPrice(minPrice + 10);
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    updateProgress();
  }, [minPrice, maxPrice, updateProgress]);

  return (
    <main className="font-jakarta">
      <section className="hidden md:flex md:bg-[url('/src/assets/images/background-product.webp')] md:h-80 md:bg-no-repeat md:bg-cover md:bg-center">
        <h1 className="text-white my-auto pl-[10%] text-4xl lg:text-5xl max-w-xl lg:max-w-4xl">We Provide Good Coffee and Healthy Meals</h1>
      </section>
      <section className="mt-[20%] tbt:mt-[15%] md:mt-5 px-[5%] tbt:px-[10%]">
        <div className="md:flex md:justify-between">
          <h1 className="text-2xl font-semibold">
            Today <span className="text-span">Promo</span>
          </h1>
          <div className="hidden md:flex">
            <button className="text-secondary bg-darkgray2 rounded-full mr-5 w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">&#9666;</button>
            <button className="text-secondary bg-darkgray2 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">&#9656;</button>
          </div>
        </div>
        <div className="flex overflow-x-scroll space-x-4 h-20 mt-2">
          <div className="flex p-2 bg-bggreen rounded-3xl min-w-52 lg:min-w-72">
            <img className="w-1/4" src={promoImg1} alt="promo-img" />
            <div>
              <h2 className="text-[0.6rem] font-bold">HAPPY MOTHER'S DAY!</h2>
              <p className="text-[0.6rem] mb-2">Get one of our favorite menu for free!</p>
              <p className="text-[0.6rem] text-white">Klaim Kupon</p>
            </div>
          </div>
          <div className="flex p-2 bg-bggreen rounded-3xl min-w-52 lg:min-w-72">
            <img className="w-1/4" src={promoImg1} alt="promo-img" />
            <div>
              <h2 className="text-[0.6rem] font-bold">HAPPY MOTHER'S DAY!</h2>
              <p className="text-[0.6rem] mb-2">Get one of our favorite menu for free!</p>
              <p className="text-[0.6rem] text-white">Klaim Kupon</p>
            </div>
          </div>
          <div className="flex p-2 bg-bggreen rounded-3xl min-w-52 lg:min-w-72">
            <img className="w-1/4" src={promoImg1} alt="promo-img" />
            <div>
              <h2 className="text-[0.6rem] font-bold">HAPPY MOTHER'S DAY!</h2>
              <p className="text-[0.6rem] mb-2">Get one of our favorite menu for free!</p>
              <p className="text-[0.6rem] text-white">Klaim Kupon</p>
            </div>
          </div>
          <div className="flex p-2 bg-bgyellow rounded-3xl min-w-52 lg:min-w-72">
            <img className="w-1/4" src={promoImg2} alt="promo-img" />
            <div>
              <h2 className="text-[0.6rem] font-bold">HAPPY MOTHER'S DAY!</h2>
              <p className="text-[0.6rem] mb-2">Get one of our favorite menu for free!</p>
              <p className="text-[0.6rem] text-white">Klaim Kupon</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:mt-5">
          <div className="w-5 h-2 mr-2 bg-primary rounded-full" data-page="1"></div>
          <div className="w-2 h-2 mr-2 bg-bgpage rounded-full" data-page="2"></div>
          <div className="w-2 h-2 mr-2 bg-bgpage rounded-full" data-page="3"></div>
          <div className="w-2 h-2 bg-bgpage rounded-full" data-page="4"></div>
        </div>
      </section>
      <section className="px-[5%] tbt:px-[10%]">
        <h1 className="text-2xl mt-5">
          Our <span className="text-span">Product</span>
        </h1>
        <div className="flex md:mt-8">
          <div className="hidden md:block md:bg-black md:text-white md:h-1/2 md:w-1/2 uw:w-2/3 md:p-6 md:rounded-3xl">
            <div className="flex justify-between mb-6 text-sm">
              <p>Filter</p>
              <a href="#">Reset Filter</a>
            </div>
            <div className="mb-4">
              <form>
                <div className="search-name text-sm mb-1">Search</div>
                <div>
                  <input className="h-10 rounded text-sm w-full text-black" type="text" name="search" placeholder="Search Your Product" autoComplete="off" />
                </div>
              </form>
            </div>
            <div className="text-sm">
              <h2 className="mb-4">Category</h2>
              <label className="checkbox" htmlFor="favorite-product">
                <input type="checkbox" id="favorite-product" name="favorite-product" />
                <div className="checkmark"></div>
                Favorite Product
              </label>
              <label className="checkbox" htmlFor="coffee">
                <input type="checkbox" id="coffee" name="coffee" />
                <div className="checkmark"></div>
                Coffee
              </label>
              <label className="checkbox" htmlFor="non-coffee">
                <input type="checkbox" id="non-coffee" name="non-coffee" />
                <div className="checkmark"></div>
                Non Coffee
              </label>
              <label className="checkbox" htmlFor="foods">
                <input type="checkbox" id="foods" name="foods" />
                <div className="checkmark"></div>
                Foods
              </label>
              <label className="checkbox" htmlFor="add-on">
                <input type="checkbox" id="add-on" name="add-on" />
                <div className="checkmark"></div>
                Add-On
              </label>
            </div>
            <div className="text-sm">
              <h2 className="mb-4">Sort By</h2>
              <label className="checkbox" htmlFor="buy1get1">
                <input type="checkbox" id="buy1get1" name="buy1get1" />
                <div className="checkmark"></div>
                Buy 1 get 1
              </label>
              <label className="checkbox" htmlFor="flash-sale">
                <input type="checkbox" id="flash-sale" name="flash-sale" />
                <div className="checkmark"></div>
                Flash Sale
              </label>
              <label className="checkbox" htmlFor="birthday-package">
                <input type="checkbox" id="birthday-package" name="birthday-package" />
                <div className="checkmark"></div>
                Birthday Package
              </label>
              <label className="checkbox" htmlFor="cheap">
                <input type="checkbox" id="cheap" name="cheap" />
                <div className="checkmark"></div>
                Cheap
              </label>
            </div>
            <div>
              <h2 className="text-sm mb-4">Range Price</h2>
              <div className="range-slider">
                <div className="range-track"></div>
                <div
                  className="range-progress"
                  style={{
                    left: `${(minPrice / 1000) * 100}%`,
                    right: `${100 - (maxPrice / 1000) * 100}%`,
                  }}
                ></div>
                <input type="range" id="min-price-range" min="0" max="1000" step="10" value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value))} />
                <input type="range" id="max-price-range" min="0" max="1000" step="10" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
                <div className="price-labels">
                  <span id="min-price-value" style={{ left: `${(minPrice / 1000) * 100}%` }}>
                    Idr.{minPrice}
                  </span>
                  <span id="max-price-value" style={{ left: `${(maxPrice / 1000) * 100}%` }}>
                    Idr.{maxPrice}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-primary mt-4 rounded text-black w-full h-8 text-sm hover:bg-darkprimary active:bg-darkprimary2">Apply Filter</button>
          </div>
          <div className="block justify-center items-center w-full">
            <div className="flex flex-wrap justify-center">
              <div>
                <MenuCard />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">1</button>
              <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">2</button>
              <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">3</button>
              <button className="text-secondary bg-darkgray2 mr-4 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">4</button>
              <button className="text-secondary bg-darkgray2 rounded-full w-8 uw:w-12 h-8 uw:h-12 hover:bg-primary hover:text-black active:bg-darkprimary focus:bg-primary focus:text-black">&#9656;</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
