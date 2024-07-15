import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { authAdminAction } from "../redux/slices/authAdmin";

import headerLogo from "../assets/images/header-logo.webp";
import nameIcon from "../assets/images/form-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";
import passwordIcon from "../assets/images/password-icon.svg";
import eyeIcon from "../assets/images/eye-icon.svg";
import eyeOffIcon from "../assets/images/eye-off-icon.svg";

function LoginAdmin() {
  const { token, isLoading } = useStoreSelector((state) => state.auth);
  const dispatch = useStoreDispatch();
  const { loginAdminThunk } = authAdminAction;
  const [form, setForm] = useState<{ email: string; pwd: string; role: string }>({ email: "", pwd: "", role: "admin" });
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
    dispatch(loginAdminThunk(form));
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
        <h2 className="text-span mt-4 md:mt-7 font-bold text-2xl uw:text-4xl">Admin Login</h2>
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
            <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="role">
              Role
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={nameIcon} alt="email-icon" />
              <Input input={{ type: "text", name: "role", placeholder: "Enter your role", autocomplete: "name", value: form.role }} />
            </div>
            <button className="text-lightblack text-lg uw:text-2xl bg-primary hover:bg-darkprimary active:bg-darkprimary2 rounded-lg w-full h-11 uw:h-16" type="submit" disabled={isLoading}>
              {isLoading ? "loading..." : "Login"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginAdmin;
