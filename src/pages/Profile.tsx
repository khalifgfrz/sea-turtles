import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import { IAuthResponse } from "../types/response";

import Input from "../components/Input";
import ChangePassword from "../components/ChangePassword";

import { useStoreSelector } from "../redux/hooks";

import phoneIcon from "../assets/images/phone-icon.svg";
import nameIcon from "../assets/images/form-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";
import profileImg from "../assets/images/profile-img.webp";
import { IProfileBody } from "../types/profile";
import Swal from "sweetalert2";

function Profile() {
  const [form, setForm] = useState<IProfileBody>();
  const { token } = useStoreSelector((state) => state.auth);
  const [getProfile, setProfile] = useState<IProfileBody[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [changeImage, setImage] = useState<File | null>(null);

  useEffect(() => {
    const getDataUser = async () => {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user`;
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(result.data.data);
        setForm(result.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, [token]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (form?.full_name) {
        formData.append("full_name", form.full_name);
      }
      if (form?.phone) {
        formData.append("phone", form.phone);
      }
      if (form?.address) {
        formData.append("address", form.address);
      }
      if (changeImage) {
        formData.append("image", changeImage);
      }
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/settings`;
      const result = await axios.patch(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        title: "Berhasil!",
        text: "Data Berhasil Diubah!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        position: "top-end",
        background: "#0B0909",
        color: "#fff",
        customClass: {
          popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
        },
        toast: true,
      });
      console.log(result.data);
    } catch (err) {
      Swal.fire({
        title: "Gagal!",
        text: "Data Gagal Diubah!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
        position: "top-end",
        background: "#0B0909",
        color: "#fff",
        customClass: {
          popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
        },
        toast: true,
      });
      console.error(err);
    }
  };

  return (
    <main className="font-jakarta mt-[20%] tbt:mt-[10%] lg:mt-[7%] px-[5%] tbt:px-[10%]">
      <h1 className="text-4xl mb-4">Profile</h1>
      <section className="block tbt:flex">
        <div className="border border-solid border-darkgray2 p-2 tbt:h-1/2 tbt:mr-4 tbt:w-1/2 md:w-2/5 lg:w-1/4 2xl:w-1/5">
          <div>
            <p className="text-center text-sm uw:text-xl">{getProfile[0]?.full_name || "fullname"}</p>
            <p className="text-center text-sm uw:text-xl mb-2">{getProfile[0]?.email || "email"}</p>
            <div className="grid place-items-center mb-2 w-full h-25">
              {changeImage ? (
                <img className="rounded-full" width="100" height="100" src={URL.createObjectURL(changeImage)} alt="profile" />
              ) : (
                <img className="rounded-full" width="100" height="100" src={getProfile[0]?.image || profileImg} alt="profile" />
              )}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={handleButtonClick} className="mb-2 text-lightblack text-sm uw:text-xl bg-primary hover:bg-darkprimary active:bg-darkprimary2 rounded-lg w-1/2 tbt:w-3/4 h-11 uw:h-16">
              Upload New Photo
            </button>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
          </div>
          <p className="text-center text-sm uw:text-xl">Since 20 January 2024</p>
        </div>
        <div className="w-full mt-4 tbt:mt-0 border border-solid border-darkgray2 p-2">
          <form onSubmit={onSubmitHandler}>
            <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="full_name">
              Full Name
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={nameIcon} alt="name-icon" />
              <Input input={{ type: "text", name: "full_name", placeholder: "Enter Your Full Name", autocomplete: "name", value: form?.full_name, onChange: onChangeHandler }} />
            </div>
            <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="email">
              Email
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
              <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email", value: form?.email }} />
            </div>
            <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="phone">
              Phone
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={phoneIcon} alt="phone-icon" />
              <Input input={{ type: "text", name: "phone", placeholder: "Enter Your Phone", autocomplete: "off", value: form?.phone, onChange: onChangeHandler }} />
            </div>
            <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="address">
              Address
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-4 ml-5" width="20" height="20" src={addressIcon} alt="address-icon" />
              <Input input={{ type: "text", name: "address", placeholder: "Enter Your Address", autocomplete: "off", value: form?.address, onChange: onChangeHandler }} />
            </div>
            <button className="text-lightblack mb-5 text-lg uw:text-2xl bg-primary hover:bg-darkprimary active:bg-darkprimary2 rounded-lg w-full h-11 uw:h-16" type="submit">
              Submit
            </button>
          </form>
          <ChangePassword />
        </div>
      </section>
    </main>
  );
}

export default Profile;
