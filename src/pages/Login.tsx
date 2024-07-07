import React, { useEffect, useState } from "react";
// import axios, { AxiosResponse } from "axios";
import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../components/UseAuth";
// import { IAuthResponse } from "../types/response";
import Input from "../components/Input";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { authAction } from "../redux/slices/auth";

import headerLogo from "../assets/images/header-logo.webp";
import emailIcon from "../assets/images/email-icon.svg";
import passwordIcon from "../assets/images/password-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import googleIcon from "../assets/images/google-icon.svg";
import eyeIcon from "../assets/images/eye-icon.svg";
import eyeOffIcon from "../assets/images/eye-off-icon.svg";

function Login() {
  const { token, isLoading } = useStoreSelector((state) => state.auth);
  const dispatch = useStoreDispatch();
  const { loginThunk } = authAction;
  const [form, setForm] = useState<{ email: string; pwd: string }>({ email: "", pwd: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginThunk(form));
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [navigate, token]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <main className="font-jakarta bg-none md:bg-[url('/src/assets/images/background-login.webp')] md:bg-no-repeat md:bg-cover md:bg-center md:h-screen md:w-screen">
      <section className="bg-white w-full px-5 md:w-3/5 md:ml-[35%] md:mr-0 mx-auto pt-20">
        <img className="w-1/2 tbt:w-1/5" src={headerLogo} alt="header-logo" />
        <h2 className="text-span mt-4 md:mt-7 font-bold text-2xl uw:text-4xl">Login</h2>
        <p className="my-7 text-lightgray text-xl uw:text-2xl">Fill out the form correctly</p>
      </section>

      <section className="bg-white w-full px-5 md:w-3/5 md:ml-[35%] md:mr-0 mx-auto">
        <div>
          <form onSubmit={onSubmitHandler}>
            <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="email">
              Email
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
              <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email", value: form.email, onChange: onChangeHandler }} />
            </div>
            <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="pwd">
              Password
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={passwordIcon} alt="password-icon" />
              <img className="absolute mt-3.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={togglePasswordVisibility} />
              <Input input={{ type: showPassword ? "text" : "password", name: "pwd", placeholder: "Enter Your Password", autocomplete: "off", value: form.pwd, onChange: onChangeHandler }} />
            </div>
            <div className="text-right text-sm uw:text-2xl mb-5 text-primary hover:text-darkprimary active:text-darkprimary2">
              <a href="#">Lupa Password?</a>
            </div>
            <button className="text-lightblack text-lg uw:text-2xl bg-primary hover:bg-darkprimary active:bg-darkprimary2 rounded-lg w-full h-11 uw:h-16" type="submit" disabled={isLoading}>
              {isLoading ? "loading..." : "Login"}
            </button>
            <p className="text-center text-lightgray text-sm uw:text-2xl my-5">
              Not Have An Account?
              <Link to="/register" className="text-primary hover:text-darkprimary hover:underline active:text-darkprimary2 active:underline">
                Register
              </Link>
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

export default Login;
