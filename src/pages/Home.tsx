import { Component } from "react";

import headerImg from "../assets/images/header-img.webp";
import aboutImg from "../assets/images/about-img.webp";
import productImg1 from "../assets/images/menu/1.webp";
import productImg2 from "../assets/images/menu/2.webp";
import productImg3 from "../assets/images/menu/3.webp";
import productImg4 from "../assets/images/menu/4.webp";
import visitImg from "../assets/images/visit-img.webp";
import testimonialImg from "../assets/images/testimonial-img.webp";
import shoppingLogo from "../assets/images/shopping-cart.svg";
import checklistLogo from "../assets/images/checklist-logo.svg";

export class Home extends Component {
  render() {
    return (
      <main className="font-jakarta">
        <section className="tbt:flex tbt:flex-row-reverse">
          <div className="tbt:w-1/2">
            <img src={headerImg} alt="header-img" />
          </div>
          <div className="tbt:w-1/2 max-tbt:absolute max-tbt:top-[51%] xxsm:top-[60%] xsm:top-[68%] px-[5%] tbt:pl-[10%] py-12 tbt:pt-28 md:pt-52 lg:pt-80 uw:pt-[25%] tbt:pb-0 bg-black">
            <h1 className="text-2xl lg:text-5xl text-white">Start Your Day with Coffee and Good Meals</h1>
            <p className="mt-5 text-sm lg:text-lg uw:text-2xl text-white">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            <a href="login.html">
              <button className="mt-4 bg-primary hover:bg-darkprimary active:bg-darkprimary2 px-[5%] py-3 rounded-xl lg:text-lg uw:text-2xl">Get Started</button>
            </a>
            <div className="flex justify-between mt-5">
              <div className="staff mr-5">
                <p className="text-primary text-2xl lg:text-4xl uw:text-5xl">90+</p>
                <p className="text-white text-xs lg:text-sm uw:text-xl">Staff</p>
              </div>
              <div className="stores border-x border-white px-10 mr-5">
                <p className="text-primary text-2xl lg:text-4xl uw:text-5xl">30+</p>
                <p className="text-white text-xs lg:text-sm uw:text-xl">Stores</p>
              </div>
              <div className="mr-auto">
                <p className="text-primary text-2xl lg:text-4xl uw:text-5xl">800+</p>
                <p className="text-white text-xs lg:text-sm uw:text-xl">Customer</p>
              </div>
            </div>
          </div>
        </section>
        <section className="block tbt:flex tbt:flex-row-reverse px-[5%] tbt:pl-[10%] tbt:pr-0 mt-[105%] xxsm:mt-[89%] xsm:mt-[77%] tbt:mt-0">
          <div className="hidden tbt:flex tbt:w-[63%]">
            <img src={aboutImg} alt="about-img" />
          </div>
          <div className="pt-5 lg:pt-16 tbt:pr-[5%] tbt:w-1/2">
            <div className="flex items-center">
              <div className="w-1 h-16 bg-primary mr-2"></div>
              <h1 className="text-2xl lg:text-4xl">
                We Provide <span className="text-span">Good Coffee</span> and <span className="text-span">Healthy Meals</span>
              </h1>
            </div>
            <p className="text-lightgray text-sm lg:text-base mt-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            <div className="flex mt-2">
              <img width="15" height="15" src={checklistLogo} alt="checklist-logo" />
              <p className="ml-2 text-sm lg:text-base text-lightgray">High quality beans</p>
            </div>
            <div className="flex mt-2">
              <img width="15" height="15" src={checklistLogo} alt="checklist-logo" />
              <p className="ml-2 text-sm lg:text-base text-lightgray">Healthy meals, you can request the ingredients</p>
            </div>
            <div className="flex mt-2">
              <img width="15" height="15" src={checklistLogo} alt="checklist-logo" />
              <p className="ml-2 text-sm lg:text-base text-lightgray">Chat with our staff to get better experience for ordering</p>
            </div>
            <div className="flex mt-2">
              <img width="15" height="15" src={checklistLogo} alt="checklist-logo" />
              <p className="ml-2 text-sm lg:text-base text-lightgray">Free member card with a minimum purchase of IDR 200.000.</p>
            </div>
          </div>
        </section>
        <section className="my-5 px-[5%] tbt:px-[10%]">
          <div className="text-center">
            <h1 className="text-2xl lg:text-4xl">
              Here is People's <span className="text-span">Favorite</span>
            </h1>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-primary mt-2"></div>
            </div>
            <p className="mt-2 text-sm lg:text-base text-lightgray">Let's choose and have a bit taste of poeple's favorite. It might be yours too!</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="block w-1/3 mr-2 md:w-1/5 md:relative">
              <img className="mt-4 mb-2 md:mb-0 w-full" src={productImg1} alt="Hazzlenut Latte" />
              <div className="md:absolute md:top-36 lg:top-48 xl:top-52 2xl:top-56 4xl:top-72 uw:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 4xl:left-2 md:w-36 lg:w-48 xl:w-52 2xl:w-56 4xl:w-72 uw:w-96 md:p-2 md:bg-white">
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
            <div className="block w-1/3 tbt:mr-2 md:w-1/5 md:relative">
              <img className="mt-4 mb-2 md:mb-0 w-full" src={productImg2} alt="Hazzlenut Latte" />
              <div className="md:absolute md:top-36 lg:top-48 xl:top-52 2xl:top-56 4xl:top-72 uw:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 4xl:left-2 md:w-36 lg:w-48 xl:w-52 2xl:w-56 4xl:w-72 uw:w-96 md:p-2 md:bg-white">
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
            <div className="block w-1/3 mr-2 md:w-1/5 md:relative">
              <img className="mt-4 mb-2 md:mb-0 w-full" src={productImg3} alt="Hazzlenut Latte" />
              <div className="md:absolute md:top-36 lg:top-48 xl:top-52 2xl:top-56 4xl:top-72 uw:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 4xl:left-2 md:w-36 lg:w-48 xl:w-52 2xl:w-56 4xl:w-72 uw:w-96 md:p-2 md:bg-white">
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
            <div className="block w-1/3 tbt:mr-2 md:w-1/5 md:relative">
              <img className="mt-4 mb-2 md:mb-0 w-full" src={productImg4} alt="Hazzlenut Latte" />
              <div className="md:absolute md:top-36 lg:top-48 xl:top-52 2xl:top-56 4xl:top-72 uw:top-96 md:left-2.5 lg:left-1.5 xl:left-2.5 4xl:left-2 md:w-36 lg:w-48 xl:w-52 2xl:w-56 4xl:w-72 uw:w-96 md:p-2 md:bg-white">
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
        </section>
        <section className="my-5 md:mt-52 uw:mt-60 px-[5%] tbt:px-[10%]">
          <div className="text-center">
            <h1 className="text-2xl lg:text-4xl">
              <span className="text-span">Visit Our Store</span> in the Spot on the Map Below
            </h1>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-primary mt-2"></div>
            </div>
            <p className="text-lightgray text-sm lg:text-base mt-2">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
          </div>
          <img className="mt-2" src={visitImg} alt="visit-img" />
        </section>
        <section className="bg-homebg py-10 px-[5%] tbt:px-[10%]">
          <div className="block md:testimonial-content">
            <h2 className="text-white text-sm lg:text-base text-center md:text-left" style={{ gridArea: "header" }}>
              TESTIMONIAL
            </h2>
            <div className="grid place-items-center md:flex mt-2 md:mt-0 md:mr-4" style={{ gridArea: "image" }}>
              <img className="w-3/4 md:w-full md:h-full" src={testimonialImg} alt="" />
            </div>
            <div className="flex items-center mt-2 md:mt-0" style={{ gridArea: "name" }}>
              <div className="w-1 h-10 bg-primary mr-2"></div>
              <h1 className="text-xl lg:text-4xl text-white">Viezh Robert</h1>
            </div>
            <p className="text-primary mt-2 md:mt-0 text-sm lg:text-base" style={{ gridArea: "title" }}>
              Manager Coffee Shop
            </p>
            <p className="mt-2 text-xs lg:text-base text-white md:mt-0" style={{ gridArea: "reaction" }}>
              “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"
            </p>
            <div className="flex text-primary items-center mt-1 md:mt-0" style={{ gridArea: "rating" }}>
              <div className="mr-1 lg:text-2xl uw:text-4xl" data-value="1">
                &#9733;
              </div>
              <div className="mr-1 lg:text-2xl uw:text-4xl" data-value="2">
                &#9733;
              </div>
              <div className="mr-1 lg:text-2xl uw:text-4xl" data-value="3">
                &#9733;
              </div>
              <div className="mr-1 lg:text-2xl uw:text-4xl" data-value="4">
                &#9733;
              </div>
              <div className="mr-1 lg:text-2xl uw:text-4xl" data-value="5">
                &#9733;
              </div>
              <div className="text-white text-sm lg:text-base uw:text-2xl">5.0</div>
            </div>
            <div className="flex mt-2 md:mt-0" style={{ gridArea: "button" }}>
              <button className="left-button mr-2 w-10 h-10 rounded-full bg-white hover:bg-primary active:bg-darkprimary">&#9664;</button>
              <button className="right-button w-10 h-10 rounded-full bg-white hover:bg-primary active:bg-darkprimary">&#9654;</button>
            </div>
            <div className="flex mt-5 md:mt-0" style={{ gridArea: "pagination" }}>
              <div className="dot w-2 h-2 mr-1 bg-white rounded-full" data-page="1"></div>
              <div className="dot w-2 h-2 mr-1 bg-white rounded-full" data-page="2"></div>
              <div className="dot w-2 h-2 mr-1 bg-white rounded-full" data-page="3"></div>
              <div className="dot w-2 h-2 bg-white rounded-full" data-page="4"></div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
