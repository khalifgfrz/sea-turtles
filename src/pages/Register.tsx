import { Component } from "react";

import headerLogo from "../assets/images/header-logo.webp";
import nameIcon from "../assets/images/form-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";
import passwordIcon from "../assets/images/password-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import googleIcon from "../assets/images/google-icon.svg";

export class Register extends Component {
  render() {
    return (
      <main className="font-jakarta bg-none md:bg-[url('/src/assets/images/background-register.webp')] md:bg-no-repeat md:bg-cover md:bg-center md:h-screen md:w-screen">
        <section className="bg-white w-full px-5 md:w-3/5 md:ml-[35%] mx-auto pt-20">
          <img className="w-1/2 tbt:w-1/5" src={headerLogo} alt="header-logo" />
          <h2 className="text-span mt-4 md:mt-7 font-bold text-2xl uw:text-4xl">Register</h2>
          <p className="my-7 text-lightgray text-xl uw:text-2xl">Fill out the form correctly</p>
        </section>

        <section className="bg-white w-full px-5 md:w-3/5 md:ml-[35%] mx-auto">
          <div>
            <form>
              <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="fullname">
                Full Name
              </label>
              <div className="relative mt-2">
                <img className="absolute mt-4 ml-5" width="20" height="20" src={nameIcon} alt="name-icon" />
                <input
                  className="w-full h-12 border border-solid border-darkwhite rounded-xl pt-0.5 pl-14 text-lightgray mb-3 text-xs md:text-sm uw:text-xl"
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter Your Full Name"
                  autoComplete="name"
                />
              </div>
              <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="email">
                Email
              </label>
              <div className="relative mt-2">
                <img className="absolute mt-4 ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
                <input
                  className="w-full h-12 border border-solid border-darkwhite rounded-xl pt-0.5 pl-14 text-lightgray mb-3 text-xs md:text-sm uw:text-xl"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                />
              </div>
              <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="password">
                Password
              </label>
              <div className="relative mt-2">
                <img className="absolute mt-4 ml-5" width="20" height="20" src={passwordIcon} alt="password-icon" />
                <input
                  className="w-full h-12 border border-solid border-darkwhite rounded-xl pt-0.5 pl-14 text-lightgray mb-3 text-xs md:text-sm uw:text-xl"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  autoComplete="off"
                />
              </div>
              <label htmlFor="confirmpassword">Confirm Password</label>
              <div className="relative mt-2">
                <img className="absolute mt-4 ml-5" width="20" height="20" src={passwordIcon} alt="confirmpassword-icon" />
                <input
                  className="w-full h-12 border border-solid border-darkwhite rounded-xl pt-0.5 pl-14 text-lightgray mb-3 text-xs md:text-sm uw:text-xl"
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="Enter Your Password Again"
                  autoComplete="off"
                />
              </div>
              <button className="text-lightblack text-lg uw:text-2xl bg-primary hover:bg-darkprimary active:bg-darkprimary2 rounded-lg w-full h-11 uw:h-16" type="submit">
                Register
              </button>
              <p className="text-center text-lightgray text-sm uw:text-2xl my-5">
                Have An Account?
                <a className="text-primary hover:text-darkprimary hover:underline active:text-darkprimary2 active:underline" href="login.html">
                  Login
                </a>
              </p>
            </form>
          </div>
          <div>
            <p className="text-center text-sm uw:text-2xl text-lightgray3">Or</p>
            <div className="mt-7 flex justify-around">
              <button className="w-16 h-16 md:w-2/5 shadow-lg hover:bg-darkwhite active:bg-darkwhite2">
                <div className="flex justify-center">
                  <img className="uw:w-8 uw:h-8" width="22" height="22" src={facebookIcon} alt="facebook-icon" />
                  <div className="hidden md:flex text-lg uw:text-2xl text-lightgray ml-6">Facebook</div>
                </div>
              </button>
              <button className="w-16 h-16 md:w-2/5 shadow-lg hover:bg-darkwhite active:bg-darkwhite2">
                <div className="flex justify-center">
                  <img className="uw:w-8 uw:h-8" width="22" height="22" src={googleIcon} alt="google-icon" />
                  <div className="hidden md:flex text-lg uw:text-2xl text-lightgray ml-6">Google</div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Register;
