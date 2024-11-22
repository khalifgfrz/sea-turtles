import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { registerAction } from "../redux/slices/register";

import headerLogo from "../assets/images/header-logo.webp";
import nameIcon from "../assets/images/form-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";
import passwordIcon from "../assets/images/password-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import googleIcon from "../assets/images/google-icon.svg";
import eyeIcon from "../assets/images/eye-icon.svg";
import eyeOffIcon from "../assets/images/eye-off-icon.svg";

function Register() {
  const { isLoading, isRegisterSuccess } = useStoreSelector((state) => state.register);
  const dispatch = useStoreDispatch();
  const { registerThunk } = registerAction;
  const [form, setForm] = useState<{ full_name: string; email: string; pwd: string }>({ full_name: "", email: "", pwd: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.pwd !== confirmPassword) {
      return setErrorMessage("Password harus sama");
    }
    setErrorMessage("");
    dispatch(registerThunk(form));
  };

  useEffect(() => {
    if (isRegisterSuccess) navigate("/login");
  }, [navigate, isRegisterSuccess]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="font-jakarta bg-none md:bg-[url('/src/assets/images/background-register.webp')] md:bg-no-repeat md:bg-cover md:bg-center md:h-screen md:w-screen">
      <section className="bg-white w-full px-5 md:w-3/5 md:ml-[35%] mx-auto pt-20">
        <img className="w-1/2 tbt:w-1/5" src={headerLogo} alt="header-logo" />
        <h2 className="text-span mt-4 md:mt-7 font-bold text-2xl">Register</h2>
        <p className="my-7 text-lightgray text-xl">Fill out the form correctly</p>
      </section>

      <section className="bg-white w-full px-5 md:w-3/5 md:ml-[35%] mx-auto">
        <div>
          <form onSubmit={onSubmitHandler}>
            <label className="text-lightblack2 font-semibold md:text-xl" htmlFor="full_name">
              Full Name
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={nameIcon} alt="name-icon" />
              <Input input={{ type: "text", name: "full_name", placeholder: "Enter Your Full Name", autocomplete: "name", value: form.full_name, onChange: onChangeHandler }} />
            </div>
            <label className="text-lightblack2 font-semibold md:text-xl" htmlFor="email">
              Email
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
              <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email", value: form.email, onChange: onChangeHandler }} />
            </div>
            <label className="text-lightblack2 font-semibold md:text-xl" htmlFor="pwd">
              Password
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={passwordIcon} alt="password-icon" />
              <img className="absolute mt-3.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={togglePasswordVisibility} />
              <Input input={{ type: showPassword ? "text" : "password", name: "pwd", placeholder: "Enter Your Password", autocomplete: "off", value: form.pwd, onChange: onChangeHandler }} />
            </div>
            <label className="text-lightblack2 font-semibold md:text-xl" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={passwordIcon} alt="confirmpassword-icon" />
              <Input input={{ type: "password", name: "confirmpassword", placeholder: "Enter Your Password Again", autocomplete: "off", value: confirmPassword, onChange: onConfirmPasswordChange }} />
            </div>
            {errorMessage && <p className="text-red-500 text-sm mb-3">{errorMessage}</p>}
            <button className="text-lightblack text-lg bg-primary hover:bg-darkprimary active:bg-darkprimary2 rounded-lg w-full h-11" type="submit">
              {isLoading ? "loading..." : "Register"}
            </button>
            <p className="text-center text-lightgray text-sm my-5">
              Have An Account?
              <Link to="/login" className="text-primary hover:text-darkprimary hover:underline active:text-darkprimary2 active:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-center text-sm text-lightgray3">Or</p>
          <div className="mt-7 flex justify-around">
            <button className="w-16 h-16 md:w-2/5 shadow-lg hover:bg-darkwhite active:bg-darkwhite2">
              <div className="flex justify-center">
                <img width="22" height="22" src={facebookIcon} alt="facebook-icon" />
                <div className="hidden md:flex text-lg text-lightgray ml-6">Facebook</div>
              </div>
            </button>
            <button className="w-16 h-16 md:w-2/5 shadow-lg hover:bg-darkwhite active:bg-darkwhite2">
              <div className="flex justify-center">
                <img width="22" height="22" src={googleIcon} alt="google-icon" />
                <div className="hidden md:flex text-lg text-lightgray ml-6">Google</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
