import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { IAuthResponse } from "../types/response";

import Input from "../components/Input";
import useAuth from "../components/UseAuth";
import ChangePassword from "../components/ChangePassword";

import phoneIcon from "../assets/images/phone-icon.svg";
import nameIcon from "../assets/images/form-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";

function ProfileInput() {
  const [form, setForm] = useState<{ full_name?: string; email?: string; phone?: string; address?: string }>({ full_name: "", email: "", phone: "", address: "" });
  const { token } = useAuth();

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
    const url = "https://coffee-shop-three-omega.vercel.app/user/settings";
    console.log("Token:", token);
    axios
      .patch(url, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result: AxiosResponse<IAuthResponse>) => console.log(result.data))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="full_name">
          Full Name
        </label>
        <div className="relative mt-2">
          <img className="absolute mt-4 ml-5" width="20" height="20" src={nameIcon} alt="name-icon" />
          <Input input={{ type: "text", name: "full_name", placeholder: "Enter Your Full Name", autocomplete: "name", value: form.full_name, onChange: onChangeHandler }} />
        </div>
        <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="email">
          Email
        </label>
        <div className="relative mt-2">
          <img className="absolute mt-4 ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
          <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email", value: form.email, onChange: onChangeHandler }} />
        </div>
        <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="phone">
          Phone
        </label>
        <div className="relative mt-2">
          <img className="absolute mt-4 ml-5" width="20" height="20" src={phoneIcon} alt="phone-icon" />
          <Input input={{ type: "text", name: "phone", placeholder: "Enter Your Phone", autocomplete: "off", value: form.phone, onChange: onChangeHandler }} />
        </div>
        <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="address">
          Address
        </label>
        <div className="relative mt-2">
          <img className="absolute mt-4 ml-5" width="20" height="20" src={addressIcon} alt="address-icon" />
          <Input input={{ type: "text", name: "address", placeholder: "Enter Your Address", autocomplete: "off", value: form.address, onChange: onChangeHandler }} />
        </div>
        <button className="text-lightblack mb-5 text-lg uw:text-2xl bg-primary hover:bg-darkprimary active:bg-darkprimary2 rounded-lg w-full h-11 uw:h-16" type="submit">
          Submit
        </button>
      </form>
      <ChangePassword />
    </div>
  );
}

export default ProfileInput;
