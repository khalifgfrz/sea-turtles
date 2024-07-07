import React, { useCallback, useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import axios, { AxiosResponse } from "axios";
import { IAuthResponse } from "../types/response";
import { useStoreSelector } from "../redux/hooks";

import passwordIcon from "../assets/images/password-icon.svg";
import eyeIcon from "../assets/images/eye-icon.svg";
import eyeOffIcon from "../assets/images/eye-off-icon.svg";

function ChangePassword() {
  const [form, setForm] = useState<{ pwd: string }>({ pwd: "" });
  const { token } = useStoreSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleChangePassword = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.pwd !== confirmPassword) {
      return setErrorMessage("Password harus sama");
    }
    setErrorMessage("");
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/resetpassword`;
    console.log("Token:", token);
    axios
      .patch(url, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result: AxiosResponse<IAuthResponse>) => {
        alert("Password berhasil diubah");
        console.log(result.data);
      })
      .catch((err) => console.error(err));
  };

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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  }, []);

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, handleClickOutside]);

  return (
    <>
      <button onClick={handleChangePassword} className="text-sm text-right text-primary" type="submit">
        Set New Password
      </button>
      {showModal && (
        <div className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
          <div ref={modalRef} className="bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full">
            <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4 text-center">Set New Password</h2>
            <form onSubmit={onSubmitHandler} className="w-full mt-4 tbt:mt-0 p-2">
              <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="pwd">
                Password
              </label>
              <div className="relative mt-2">
                <img className="absolute mt-4 ml-5" width="20" height="20" src={passwordIcon} alt="password-icon" />
                <img className="absolute mt-3.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={togglePasswordVisibility} />
                <Input input={{ type: showPassword ? "text" : "password", name: "pwd", placeholder: "Enter Your Password", autocomplete: "off", value: form.pwd, onChange: onChangeHandler }} />
              </div>
              <label className="text-lightblack2 font-semibold md:text-xl uw:text-2xl" htmlFor="confirmpassword">
                Confirm Password
              </label>
              <div className="relative mt-2">
                <img className="absolute mt-4 ml-5" width="20" height="20" src={passwordIcon} alt="confirmpassword-icon" />
                <Input input={{ type: "password", name: "confirmpassword", placeholder: "Enter Your Password Again", autocomplete: "off", value: confirmPassword, onChange: onConfirmPasswordChange }} />
              </div>
              {errorMessage && <p className="text-red-500 text-sm mb-3">{errorMessage}</p>}
              <div className="flex justify-center">
                <button className="text-xs tbt:text-base uw:text-2xl bg-primary hover:bg-darkprimary active:bg-darkprimary2 text-white px-4 py-2 rounded mr-2" type="submit">
                  Submit
                </button>
                <button onClick={handleCloseModal} className="text-xs tbt:text-base uw:text-2xl bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ChangePassword;
