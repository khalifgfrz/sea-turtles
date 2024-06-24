import { Component } from "react";

import productImg1 from "../assets/images/menu/1.webp";
import productImg2 from "../assets/images/menu/2.webp";
import productImg3 from "../assets/images/menu/3.webp";
import productImg4 from "../assets/images/menu/4.webp";
import shoppingLogo from "../assets/images/shopping-cart.svg";
import thumbsIcon from "../assets/images/thumbs-icon.svg";

export class DetailProduct extends Component {
  render() {
    return (
      <main className="mt-[10%] uw:mt-[5%] lg:mt-[7%]">
        <section className="px-[5%] tbt:px-[10%]">
          <div className="block mt-10">
            <div className="inline-block tbt:flex tbt:justify-between tbt:mr-1">
              <div className="inline-block tbt:w-1/2 lg:w-1/3 tbt:mr-5">
                <div className="flex">
                  <img className="w-full" src={productImg1} alt="menu1" />
                </div>
                <div className="flex justify-center mt-2">
                  <div className="flex mr-2">
                    <img className="uw:w-64 uw:h-60" width="150" height="150" src={productImg1} alt="menu1" />
                  </div>
                  <div className="flex mr-2">
                    <img className="uw:w-64 uw:h-60" width="150" height="150" src={productImg1} alt="menu1" />
                  </div>
                  <div className="flex">
                    <img className="uw:w-64 uw:h-60" width="150" height="150" src={productImg1} alt="menu1" />
                  </div>
                </div>
              </div>
              <div className="tbt:w-1/2 lg:w-2/3 xl:w-3/4 mt-4 tbt:mt-0">
                <p className="text-[0.6rem] uw:text-xl text-center p-1 bg-red-600 text-white rounded-2xl max-w-20 uw:max-w-36 mb-1">FLASH SALE</p>
                <p className="font-bold mb-1 md:text-lg uw:text-4xl">Hazzlenut Latte</p>
                <div className="flex items-center">
                  <p className="text-red-600 text-xs md:text-sm uw:text-xl line-through mr-2">IDR 40.000</p>
                  <p className="text-primary md:text-xl uw:text-4xl">IDR 20.000</p>
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
                <p className="text-xs lg:text-sm uw:text-2xl text-lightgray mb-1">
                  Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                </p>
                <div className="grid grid-cols-3 border border-darkgray2 rounded max-w-24 uw:max-w-32 mt-2">
                  <button className="uw:text-xl border border-primary mr-2 rounded w-8 text-lightblack2 font-bold text-lg hover:bg-primary active:bg-darkprimary">-</button>
                  <div className="flex justify-center items-center font-bold uw:text-xl">
                    <p>0</p>
                  </div>
                  <button className="uw:text-xl uw:ml-2 border rounded border-primary w-8 text-lightblack2 font-bold text-lg hover:bg-primary active:bg-darkprimary">+</button>
                </div>
                <p className="mt-3 font-bold text-sm uw:text-xl">Choose Size</p>
                <div className="flex justify-between mt-3">
                  <button className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black">
                    Regular
                  </button>
                  <button className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black">
                    Medium
                  </button>
                  <button className="w-1/4 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-[0.7rem] tbt:text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black">
                    Large
                  </button>
                </div>
                <p className="mt-3 font-bold text-sm uw:text-xl">Hot/Ice?</p>
                <div className="flex justify-between mt-3">
                  <button className="w-1/2 mr-4 uw:mr-32 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black">
                    Ice
                  </button>
                  <button className="w-1/2 h-8 border border-solid border-darkwhite text-lightgray hover:border-primary text-xs md:text-sm lg:text-base uw:text-xl active:bg-darkgray focus:border-primary focus:text-black">Hot</button>
                </div>
                <div className="block tbt:flex mt-3 md:mt-8 uw:mt-10">
                  <button className="w-full tbt:w-1/2 h-8 uw:h-12 tbt:mr-5 bg-primary font-semibold rounded hover:bg-darkprimary2 active:bg-darkprimary text-xs md:text-sm lg:text-base uw:text-xl">Buy</button>
                  <button className="mt-3 tbt:mt-0 w-full tbt:w-1/2 h-8 uw:h-12 border border-solid border-primary text-primary rounded hover:bg-darkwhite2 active:bg-darkwhite text-xs md:text-sm lg:text-base uw:text-xl">
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
              <div className="flex justify-center">
                <div className="block w-[45%] mr-2 md:mb-44 md:relative">
                  <img className="mt-4 md:mt-0 mb-2 md:mb-0 w-full" src={productImg2} alt="Hazzlenut Latte" />
                  <div className="z-1 md:absolute md:top-56 lg:top-72 xl:top-80 2xl:top-[22rem] 4xl:top-[27rem] uw:top-[36rem] md:left-3 lg:left-1.5 xl:left-3 2xl:left-2.5 4xl:left-2.5 uw:left-4 md:w-60 lg:w-80 xl:w-[22rem] 2xl:w-96 4xl:w-[30rem] uw:w-[40rem] md:p-2 md:bg-white">
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
                  <img className="mt-4 md:mt-0 mb-2 md:mb-0 w-full" src={productImg3} alt="Hazzlenut Latte" />
                  <div className="z-1 md:absolute md:top-56 lg:top-72 xl:top-80 2xl:top-[22rem] 4xl:top-[27rem] uw:top-[36rem] md:left-3 lg:left-1.5 xl:left-3 2xl:left-2.5 4xl:left-2.5 uw:left-4 md:w-60 lg:w-80 xl:w-[22rem] 2xl:w-96 4xl:w-[30rem] uw:w-[40rem] md:p-2 md:bg-white">
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
                <div className="hidden tbt:block w-[45%] md:mb-44 md:relative">
                  <img className="mt-4 md:mt-0 mb-2 md:mb-0 w-full" src={productImg4} alt="Hazzlenut Latte" />
                  <div className="z-1 md:absolute md:top-56 lg:top-72 xl:top-80 2xl:top-[22rem] 4xl:top-[27rem] uw:top-[36rem] md:left-3 lg:left-1.5 xl:left-3 2xl:left-2.5 4xl:left-2.5 uw:left-4 md:w-60 lg:w-80 xl:w-[22rem] 2xl:w-96 4xl:w-[30rem] uw:w-[40rem] md:p-2 md:bg-white">
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
            </div>
            <div className="flex justify-center mt-5">
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
}

export default DetailProduct;
