import { Component } from "react";

import promoImg1 from "../assets/images/promo/1.svg";
import promoImg2 from "../assets/images/promo/2.svg";
import productImg1 from "../assets/images/menu/1.webp";
import productImg2 from "../assets/images/menu/2.webp";
import productImg3 from "../assets/images/menu/3.webp";
import productImg4 from "../assets/images/menu/4.webp";
import shoppingLogo from "../assets/images/shopping-cart.svg";

export class Product extends Component {
  render() {
    return (
      <main>
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
          <div className="md:flex md:mt-8">
            <div className="hidden md:block md:bg-black md:text-white md:h-1/2 md:w-1/2 uw:w-2/3 md:p-6 md:rounded-3xl">
              <div className="flex justify-between mb-6 text-sm">
                <p>Filter</p>
                <a href="#">Reset Filter</a>
              </div>
              <div className="mb-4">
                <form>
                  <div className="search-name text-sm mb-1">Search</div>
                  <div>
                    <input className="h-10 rounded text-sm w-full" type="text" name="search" placeholder="Search Your Product" autoComplete="off" />
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
                  <div className="range-progress" id="range-progress"></div>
                  <input type="range" id="min-price-range" min="0" max="1000" step="10" value="100" />
                  <input type="range" id="max-price-range" min="0" max="1000" step="10" value="900" />
                  <div className="price-labels">
                    <span id="min-price-value">Idr.100</span>
                    <span id="max-price-value">Idr.900</span>
                  </div>
                </div>
              </div>
              <button className="bg-primary mt-4 rounded text-black w-full h-8 text-sm">Apply Filter</button>
            </div>
            <div className="block md:w-full">
              <div className="flex flex-wrap justify-center">
                <div className="block w-[45%] mr-2 md:mb-44 md:relative">
                  <img className="mt-4 md:mt-0 mb-2 md:mb-0 w-full" src={productImg1} alt="Hazzlenut Latte" />
                  <div className="z-1 md:absolute md:top-52 lg:top-64 xl:top-72 2xl:top-80 4xl:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 2xl:left-5 4xl:left-2.5 uw:left-4 md:w-56 lg:w-72 xl:w-80 4xl:w-[27rem] uw:w-[32rem] md:p-2 md:bg-white">
                    <p className="font-bold mb-1 text-sm md:text-base lg:text-lg uw:text-2xl">Hazzlenut Latte</p>
                    <p className="text-xs lg:text-sm 4xl:text-base uw:text-xl text-lightgray">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <div className="flex text-primary items-center mt-1">
                      <div className="uw:text-xl" data-value="1">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="2">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="3">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="4">
                        &#9733;
                      </div>
                      <div className="mr-1 uw:text-xl" data-value="5">
                        &#9733;
                      </div>
                      <div className="text-lightgray text-sm uw:text-2xl">5.0</div>
                    </div>
                    <div className="block tbt:flex tbt:items-center">
                      <p className="md:hidden text-red-600 text-[0.7rem] line-through tbt:mr-2">IDR 40.000</p>
                      <p className="text-primary text-sm tbt:text-base md:text-lg uw:text-2xl">IDR 20.000</p>
                    </div>
                    <div className="md:flex">
                      <button className="w-full md:w-2/3 md:mr-2 h-8 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs">Buy</button>
                      <button className="mt-3 md:mt-0 w-full md:w-1/3 h-8 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs">
                        <div className="flex items-center justify-center">
                          <img width="20" height="20" src={shoppingLogo} alt="shopping-cart" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-[45%] tbt:mr-2 md:mb-44 md:relative">
                  <img className="mt-4 md:mt-0 mb-2 md:mb-0 w-full" src={productImg2} alt="Hazzlenut Latte" />
                  <div className="z-1 md:absolute md:top-52 lg:top-64 xl:top-72 2xl:top-80 4xl:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 2xl:left-5 4xl:left-2.5 uw:left-4 md:w-56 lg:w-72 xl:w-80 4xl:w-[27rem] uw:w-[32rem] md:p-2 md:bg-white">
                    <p className="font-bold mb-1 text-sm md:text-base lg:text-lg uw:text-2xl">Hazzlenut Latte</p>
                    <p className="text-xs lg:text-sm 4xl:text-base uw:text-xl text-lightgray">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <div className="flex text-primary items-center mt-1">
                      <div className="uw:text-xl" data-value="1">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="2">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="3">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="4">
                        &#9733;
                      </div>
                      <div className="mr-1 uw:text-xl" data-value="5">
                        &#9733;
                      </div>
                      <div className="text-lightgray text-sm uw:text-2xl">5.0</div>
                    </div>
                    <div className="block tbt:flex tbt:items-center">
                      <p className="md:hidden text-red-600 text-[0.7rem] line-through tbt:mr-2">IDR 40.000</p>
                      <p className="text-primary text-sm tbt:text-base md:text-lg uw:text-2xl">IDR 20.000</p>
                    </div>
                    <div className="md:flex">
                      <button className="w-full md:w-2/3 md:mr-2 h-8 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs">Buy</button>
                      <button className="mt-3 md:mt-0 w-full md:w-1/3 h-8 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs">
                        <div className="flex items-center justify-center">
                          <img width="20" height="20" src={shoppingLogo} alt="shopping-cart" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-[45%] mr-2 md:mb-44 md:relative">
                  <img className="mt-4 md:mt-0 mb-2 md:mb-0 w-full" src={productImg3} alt="Hazzlenut Latte" />
                  <div className="z-1 md:absolute md:top-52 lg:top-64 xl:top-72 2xl:top-80 4xl:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 2xl:left-5 4xl:left-2.5 uw:left-4 md:w-56 lg:w-72 xl:w-80 4xl:w-[27rem] uw:w-[32rem] md:p-2 md:bg-white">
                    <p className="font-bold mb-1 text-sm md:text-base lg:text-lg uw:text-2xl">Hazzlenut Latte</p>
                    <p className="text-xs lg:text-sm 4xl:text-base uw:text-xl text-lightgray">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <div className="flex text-primary items-center mt-1">
                      <div className="uw:text-xl" data-value="1">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="2">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="3">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="4">
                        &#9733;
                      </div>
                      <div className="mr-1 uw:text-xl" data-value="5">
                        &#9733;
                      </div>
                      <div className="text-lightgray text-sm uw:text-2xl">5.0</div>
                    </div>
                    <div className="block tbt:flex tbt:items-center">
                      <p className="md:hidden text-red-600 text-[0.7rem] line-through tbt:mr-2">IDR 40.000</p>
                      <p className="text-primary text-sm tbt:text-base md:text-lg uw:text-2xl">IDR 20.000</p>
                    </div>
                    <div className="md:flex">
                      <button className="w-full md:w-2/3 md:mr-2 h-8 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs">Buy</button>
                      <button className="mt-3 md:mt-0 w-full md:w-1/3 h-8 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs">
                        <div className="flex items-center justify-center">
                          <img width="20" height="20" src={shoppingLogo} alt="shopping-cart" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-[45%] md:mb-44 md:relative">
                  <img className="mt-4 md:mt-0 mb-2 md:mb-0 w-full" src={productImg4} alt="Hazzlenut Latte" />
                  <div className="z-1 md:absolute md:top-52 lg:top-64 xl:top-72 2xl:top-80 4xl:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 2xl:left-5 4xl:left-2.5 uw:left-4 md:w-56 lg:w-72 xl:w-80 4xl:w-[27rem] uw:w-[32rem] md:p-2 md:bg-white">
                    <p className="font-bold mb-1 text-sm md:text-base lg:text-lg uw:text-2xl">Hazzlenut Latte</p>
                    <p className="text-xs lg:text-sm 4xl:text-base uw:text-xl text-lightgray">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <div className="flex text-primary items-center mt-1">
                      <div className="uw:text-xl" data-value="1">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="2">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="3">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="4">
                        &#9733;
                      </div>
                      <div className="mr-1 uw:text-xl" data-value="5">
                        &#9733;
                      </div>
                      <div className="text-lightgray text-sm uw:text-2xl">5.0</div>
                    </div>
                    <div className="block tbt:flex tbt:items-center">
                      <p className="md:hidden text-red-600 text-[0.7rem] line-through tbt:mr-2">IDR 40.000</p>
                      <p className="text-primary text-sm tbt:text-base md:text-lg uw:text-2xl">IDR 20.000</p>
                    </div>
                    <div className="md:flex">
                      <button className="w-full md:w-2/3 md:mr-2 h-8 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs">Buy</button>
                      <button className="mt-3 md:mt-0 w-full md:w-1/3 h-8 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs">
                        <div className="flex items-center justify-center">
                          <img width="20" height="20" src={shoppingLogo} alt="shopping-cart" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-[45%] mr-2 md:mb-44 md:relative">
                  <img className="mt-4 md:mt-0 mb-2 md:mb-0 w-full" src={productImg1} alt="Hazzlenut Latte" />
                  <div className="z-1 md:absolute md:top-52 lg:top-64 xl:top-72 2xl:top-80 4xl:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 2xl:left-5 4xl:left-2.5 uw:left-4 md:w-56 lg:w-72 xl:w-80 4xl:w-[27rem] uw:w-[32rem] md:p-2 md:bg-white">
                    <p className="font-bold mb-1 text-sm md:text-base lg:text-lg uw:text-2xl">Hazzlenut Latte</p>
                    <p className="text-xs lg:text-sm 4xl:text-base uw:text-xl text-lightgray">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <div className="flex text-primary items-center mt-1">
                      <div className="uw:text-xl" data-value="1">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="2">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="3">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="4">
                        &#9733;
                      </div>
                      <div className="mr-1 uw:text-xl" data-value="5">
                        &#9733;
                      </div>
                      <div className="text-lightgray text-sm uw:text-2xl">5.0</div>
                    </div>
                    <div className="block tbt:flex tbt:items-center">
                      <p className="md:hidden text-red-600 text-[0.7rem] line-through tbt:mr-2">IDR 40.000</p>
                      <p className="text-primary text-sm tbt:text-base md:text-lg uw:text-2xl">IDR 20.000</p>
                    </div>
                    <div className="md:flex">
                      <button className="w-full md:w-2/3 md:mr-2 h-8 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs">Buy</button>
                      <button className="mt-3 md:mt-0 w-full md:w-1/3 h-8 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs">
                        <div className="flex items-center justify-center">
                          <img width="20" height="20" src={shoppingLogo} alt="shopping-cart" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block w-[45%] md:mb-44 md:relative">
                  <img className="mt-4 md:mt-0 mb-2 md:mb-0 w-full" src={productImg2} alt="Hazzlenut Latte" />
                  <div className="z-1 md:absolute md:top-52 lg:top-64 xl:top-72 2xl:top-80 4xl:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 2xl:left-5 4xl:left-2.5 uw:left-4 md:w-56 lg:w-72 xl:w-80 4xl:w-[27rem] uw:w-[32rem] md:p-2 md:bg-white">
                    <p className="font-bold mb-1 text-sm md:text-base lg:text-lg uw:text-2xl">Hazzlenut Latte</p>
                    <p className="text-xs lg:text-sm 4xl:text-base uw:text-xl text-lightgray">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <div className="flex text-primary items-center mt-1">
                      <div className="uw:text-xl" data-value="1">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="2">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="3">
                        &#9733;
                      </div>
                      <div className="uw:text-xl" data-value="4">
                        &#9733;
                      </div>
                      <div className="mr-1 uw:text-xl" data-value="5">
                        &#9733;
                      </div>
                      <div className="text-lightgray text-sm uw:text-2xl">5.0</div>
                    </div>
                    <div className="block tbt:flex tbt:items-center">
                      <p className="md:hidden text-red-600 text-[0.7rem] line-through tbt:mr-2">IDR 40.000</p>
                      <p className="text-primary text-sm tbt:text-base md:text-lg uw:text-2xl">IDR 20.000</p>
                    </div>
                    <div className="md:flex">
                      <button className="w-full md:w-2/3 md:mr-2 h-8 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs">Buy</button>
                      <button className="mt-3 md:mt-0 w-full md:w-1/3 h-8 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs">
                        <div className="flex items-center justify-center">
                          <img width="20" height="20" src={shoppingLogo} alt="shopping-cart" />
                        </div>
                      </button>
                    </div>
                  </div>
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
}

export default Product;
