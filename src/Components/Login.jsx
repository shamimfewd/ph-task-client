import React, { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const axiosPublic = useAxiosPublic();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      email: e.target.email.value,
      //   phone: e.target.phone.value,
      password: e.target.password.value,
    };

    const login = await axiosPublic.post("/loginUser", userInfo);
    console.log(login.data);

    if (login.data.insertedId) {
      console.log("login");
    }
    console.log(login.data);
  };

  const handleClick = () => {
    setShowPass(!showPass);
  };
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh]">
        <div className=" p-6 rounded-xl shadow-2xl ">
          <h3 className="text-3xl mb-6 font-bold text-gray-700">Login</h3>
          <form onSubmit={handleSubmit}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Email</span>
              </div>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
                name="email"
              />
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-lg">Password</span>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "password" : "text"}
                  placeholder="********"
                  className="input input-bordered w-full"
                  name="password"
                />
                <span
                  onClick={handleClick}
                  className="absolute cursor-pointer right-4 top-3"
                >
                  {showPass ? (
                    <FaEyeSlash className="text-3xl" />
                  ) : (
                    <FaEye className="text-3xl" />
                  )}
                </span>
              </div>
            </label>
            <br />
            <button className="btn w-full bg-[#1E90FF] text-lg text-white">
              Login
            </button>
          </form>
          <p className="border-b mt-2 border-gray-300">
            if you don not have an account. Please go to{" "}
            <Link to={"/register"} className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
