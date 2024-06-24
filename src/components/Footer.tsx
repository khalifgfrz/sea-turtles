import { Link } from "react-router-dom";

import logo from "../assets/images/footer-logo.webp";
import facebookIcon from "../assets/images/facebook-icon-footer.svg";
import instagramIcon from "../assets/images/instagram-icon-footer.svg";
import twitterIcon from "../assets/images/twitter-icon-footer.svg";

function Footer() {
  return (
    <footer className="font-jakarta flex w-full flex-wrap bg-darkgray justify-between py-[1%] px-[5%] tbt:px-[10%] mt-12">
      <div className="py-4 w-full tbt:w-1/2 md:w-fit">
        <img className="mb-4 uw:w-60 uw:h-16" width="160" height="40" src={logo} alt="footer-logo" />
        <p className="mb-7 text-sm text-lightgray lg:text-lg uw:text-xl">
          Coffee Shop is a store that sells some good <br />
          meals, and especially coffee. We provide <br />
          high quality beans
        </p>
        <p className="text-lightgray2 text-sm lg:text-base">&copy; 2024CoffeeStore</p>
      </div>
      <div className="py-4 w-1/2 tbt:w-1/4 md:w-fit">
        <h2 className="mb-6 font-bold text-sm lg:text-lg uw:text-xl">Product</h2>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          Our Product
        </Link>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          Pricing
        </Link>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          Locations
        </Link>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          Countries
        </Link>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          Blog
        </Link>
      </div>
      <div className="py-4 w-1/2 tbt:w-1/4 md:w-fit">
        <h2 className="mb-6 font-bold text-sm lg:text-lg uw:text-xl">Engage</h2>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          Partner
        </Link>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          FAQ
        </Link>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          About Us
        </Link>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          Privacy Policy
        </Link>
        <Link to="#" className="flex mb-4 text-lightgray text-sm lg:text-lg uw:text-xl hover:underline active:text-lightgray2">
          Terms of Service
        </Link>
      </div>
      <div className="py-4 tbt:w-1/4 md:w-fit h-1/2">
        <h2 className="mb-6 font-bold text-sm lg:text-lg uw:text-xl">Social Media</h2>
        <div className="flex">
          <Link to="#" className="mr-4">
            <img className="rounded-full hover:bg-lightblack active:bg-black tbt:w-9 tbt:h-9 uw:w-12 uw:h-12" width="30" height="30" src={facebookIcon} alt="facebook-icon" />
          </Link>
          <Link to="#" className="mr-4">
            <img className="rounded-full hover:bg-lightblack active:bg-black tbt:w-9 tbt:h-9 uw:w-12 uw:h-12" width="30" height="30" src={twitterIcon} alt="twitter-icon" />
          </Link>
          <Link to="#">
            <img className="rounded-full hover:bg-lightblack active:bg-black tbt:w-9 tbt:h-9 uw:w-12 uw:h-12" width="30" height="30" src={instagramIcon} alt="instagram-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
